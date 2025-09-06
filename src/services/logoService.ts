import { supabase } from '@/lib/supabaseClient';
import { toast } from '@/hooks/use-toast';

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
    try {
      console.log('[Logo] Salvando logo...');
      const { data, error } = await supabase
        .from('logos')
        .insert({ user_id: userId, path })
        .select('*')
        .single();
      if (error) {
        console.error('[Logo] Erro ao salvar:', error);
        toast({ title: 'Erro', description: 'Erro ao salvar logo no banco de dados.', variant: 'destructive' });
        throw error;
      }
      console.log('[Logo] Logo salvo com sucesso');
      return data as LogoRecord;
    } catch (error) {
      console.error('[Logo] Erro geral:', error);
      if (!error.message?.includes('salvar')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  listUserLogos: async (userId: string) => {
    try {
      console.log('[Logo] Carregando logos...');
      const { data, error } = await supabase
        .from('logos')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) {
        console.error('[Logo] Erro ao carregar:', error);
        toast({ title: 'Erro', description: 'Erro ao carregar logos.', variant: 'destructive' });
        throw error;
      }
      console.log('[Logo] Logos carregados');
      return (data || []) as LogoRecord[];
    } catch (error) {
      console.error('[Logo] Erro geral:', error);
      if (!error.message?.includes('carregar')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  deleteLogo: async (id: string) => {
    try {
      console.log('[Logo] Deletando logo...');
      const { error } = await supabase.from('logos').delete().eq('id', id);
      if (error) {
        console.error('[Logo] Erro ao deletar:', error);
        toast({ title: 'Erro', description: 'Erro ao deletar logo.', variant: 'destructive' });
        throw error;
      }
      console.log('[Logo] Logo deletado');
      toast({ title: 'Sucesso', description: 'Logo deletado com sucesso!' });
    } catch (error) {
      console.error('[Logo] Erro geral:', error);
      if (!error.message?.includes('deletar')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
};
