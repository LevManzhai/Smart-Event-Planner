-- Проверка существующих таблиц и создание недостающих

-- Проверка таблицы events
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'events') THEN
    CREATE TABLE events (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      event_date DATE NOT NULL,
      event_time TIME NOT NULL,
      image_url TEXT,
      created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      invite_code TEXT UNIQUE NOT NULL
    );
    RAISE NOTICE 'Таблица events создана';
  ELSE
    RAISE NOTICE 'Таблица events уже существует';
  END IF;
END $$;

-- Проверка таблицы rsvp
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'rsvp') THEN
    CREATE TABLE rsvp (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      event_id UUID REFERENCES events(id) ON DELETE CASCADE,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      attending BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    RAISE NOTICE 'Таблица rsvp создана';
  ELSE
    RAISE NOTICE 'Таблица rsvp уже существует';
  END IF;
END $$;

-- Проверка хранилища для изображений
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM storage.buckets WHERE id = 'event-images') THEN
    INSERT INTO storage.buckets (id, name, public) VALUES ('event-images', 'event-images', true);
    RAISE NOTICE 'Хранилище event-images создано';
  ELSE
    RAISE NOTICE 'Хранилище event-images уже существует';
  END IF;
END $$;

-- Настройка политик безопасности для событий
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

-- Политики для событий (удаляем старые если есть и создаем новые)
DROP POLICY IF EXISTS "Users can view their own events" ON events;
DROP POLICY IF EXISTS "Users can insert their own events" ON events;
DROP POLICY IF EXISTS "Users can update their own events" ON events;
DROP POLICY IF EXISTS "Users can delete their own events" ON events;

CREATE POLICY "Users can view their own events" ON events
  FOR SELECT USING (auth.uid() = created_by);

CREATE POLICY "Users can insert their own events" ON events
  FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own events" ON events
  FOR UPDATE USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own events" ON events
  FOR DELETE USING (auth.uid() = created_by);

-- Политики для RSVP (удаляем старые если есть и создаем новые)
DROP POLICY IF EXISTS "Anyone can view RSVPs for events" ON rsvp;
DROP POLICY IF EXISTS "Anyone can insert RSVPs" ON rsvp;

CREATE POLICY "Anyone can view RSVPs for events" ON rsvp
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert RSVPs" ON rsvp
  FOR INSERT WITH CHECK (true);

-- Политики для хранилища (удаляем старые если есть и создаем новые)
DROP POLICY IF EXISTS "Anyone can view event images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload event images" ON storage.objects;

CREATE POLICY "Anyone can view event images" ON storage.objects
  FOR SELECT USING (bucket_id = 'event-images');

CREATE POLICY "Authenticated users can upload event images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'event-images' AND auth.role() = 'authenticated');

