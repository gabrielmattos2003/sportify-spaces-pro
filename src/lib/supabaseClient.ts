import { createClient } from '@supabase/supabase-js';

// Supabase configuration for your connected project
// These will be automatically populated by Lovable's Supabase integration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Fallback check - if you see this warning, you need to configure your Supabase credentials
if (!SUPABASE_URL.startsWith('https://') || !SUPABASE_ANON_KEY.startsWith('eyJ')) {
  console.warn('[Supabase] Please configure your Supabase credentials in the Lovable Supabase integration panel');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
