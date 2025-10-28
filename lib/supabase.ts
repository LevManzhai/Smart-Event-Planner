import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          event_date: string
          event_time: string
          image_url: string | null
          created_by: string
          created_at: string
          invite_code: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          event_date: string
          event_time: string
          image_url?: string | null
          created_by: string
          created_at?: string
          invite_code: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          event_date?: string
          event_time?: string
          image_url?: string | null
          created_by?: string
          created_at?: string
          invite_code?: string
        }
      }
      rsvp: {
        Row: {
          id: string
          event_id: string
          email: string
          name: string
          attending: boolean
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          email: string
          name: string
          attending: boolean
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          email?: string
          name?: string
          attending?: boolean
          created_at?: string
        }
      }
    }
  }
}
