# Environment Variables for GitHub Pages

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Site URL for GitHub Pages
NEXT_PUBLIC_SITE_URL=https://levmanzhai.github.io/Smart-Event-Planner

# EmailJS Configuration (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## GitHub Secrets Setup

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key

## Supabase Configuration

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Settings**
3. Set the following:
   - **Site URL**: `https://levmanzhai.github.io/Smart-Event-Planner`
   - **Redirect URLs**: 
     - `https://levmanzhai.github.io/Smart-Event-Planner/**`
     - `http://localhost:3000/**` (for local development)

## Final URL

Your deployed site will be available at: `https://levmanzhai.github.io/Smart-Event-Planner`
