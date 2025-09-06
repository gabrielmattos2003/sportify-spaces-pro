import { createClient } from '@supabase/supabase-js';

// Public client for browser usage. These values are safe to expose in the frontend.
// Replace these placeholders with your actual Supabase project values.
// In Lovable, env files are not used. It's OK to keep public keys here.
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
  // eslint-disable-next-line no-console
  console.warn('[Supabase] Configure SUPABASE_URL and SUPABASE_ANON_KEY in src/lib/supabaseClient.ts');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
