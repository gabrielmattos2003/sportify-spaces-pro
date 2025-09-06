import { supabase } from '@/lib/supabaseClient';

// Table schema suggestion (execute in Supabase SQL):
// create table if not exists public.logos (
//   id uuid primary key default gen_random_uuid(),
//   user_id uuid not null references auth.users(id) on delete cascade,
//   path text not null,
//   created_at timestamp with time zone default now()
// );
// -- RLS
// alter table public.logos enable row level security;
// create policy "Users can manage their own logos" on public.logos
// for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

export interface LogoRecord {
  id: string;
  user_id: string;
  path: string;
  created_at: string;
}

export const logoService = {
  saveLogo: async (userId: string, path: string) => {
    const { data, error } = await supabase
      .from('logos')
      .insert({ user_id: userId, path })
      .select('*')
      .single();
    if (error) throw error;
    return data as LogoRecord;
  },
  listUserLogos: async (userId: string) => {
    const { data, error } = await supabase
      .from('logos')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []) as LogoRecord[];
  },
  deleteLogo: async (id: string) => {
    const { error } = await supabase.from('logos').delete().eq('id', id);
    if (error) throw error;
  },
};
