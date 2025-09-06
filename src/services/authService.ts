import { supabase } from '@/lib/supabaseClient';
import type { User, Session } from '@supabase/supabase-js';
import { toast } from '@/hooks/use-toast';

export const authService = {
  signUpWithEmail: async (email: string, password: string) => {
    try {
      console.log('[Auth] Iniciando cadastro...');
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) {
        if (error.message.includes('already registered')) {
          toast({ title: 'Erro', description: 'Este email já está cadastrado.', variant: 'destructive' });
        } else if (error.message.includes('password')) {
          toast({ title: 'Erro', description: 'Senha deve ter pelo menos 6 caracteres.', variant: 'destructive' });
        } else {
          toast({ title: 'Erro', description: 'Erro ao criar conta. Tente novamente.', variant: 'destructive' });
        }
        throw error;
      }
      console.log('[Auth] Cadastro bem-sucedido');
      toast({ title: 'Sucesso', description: 'Conta criada com sucesso! Verifique seu email.' });
      return data;
    } catch (error) {
      console.error('[Auth] Erro no cadastro:', error);
      if (!error.message?.includes('already registered') && !error.message?.includes('password')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  
  signInWithEmail: async (email: string, password: string) => {
    try {
      console.log('[Auth] Iniciando login...');
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({ title: 'Erro', description: 'Email ou senha incorretos.', variant: 'destructive' });
        } else {
          toast({ title: 'Erro', description: 'Erro ao fazer login. Tente novamente.', variant: 'destructive' });
        }
        throw error;
      }
      console.log('[Auth] Login bem-sucedido');
      toast({ title: 'Sucesso', description: 'Login realizado com sucesso!' });
      return data;
    } catch (error) {
      console.error('[Auth] Erro no login:', error);
      if (!error.message?.includes('Invalid login credentials')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  
  signOut: async () => {
    try {
      console.log('[Auth] Fazendo logout...');
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({ title: 'Erro', description: 'Erro ao fazer logout.', variant: 'destructive' });
        throw error;
      }
      console.log('[Auth] Logout bem-sucedido');
      toast({ title: 'Sucesso', description: 'Logout realizado com sucesso!' });
    } catch (error) {
      console.error('[Auth] Erro no logout:', error);
      if (!error.message) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  
  resetPassword: async (email: string) => {
    try {
      console.log('[Auth] Enviando email de recuperação...');
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      if (error) {
        toast({ title: 'Erro', description: 'Erro ao enviar email de recuperação.', variant: 'destructive' });
        throw error;
      }
      console.log('[Auth] Email de recuperação enviado');
      toast({ title: 'Sucesso', description: 'Email de recuperação enviado!' });
    } catch (error) {
      console.error('[Auth] Erro na recuperação:', error);
      if (!error.message) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  
  updatePassword: async (password: string) => {
    try {
      console.log('[Auth] Atualizando senha...');
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        toast({ title: 'Erro', description: 'Erro ao atualizar senha.', variant: 'destructive' });
        throw error;
      }
      console.log('[Auth] Senha atualizada');
      toast({ title: 'Sucesso', description: 'Senha atualizada com sucesso!' });
    } catch (error) {
      console.error('[Auth] Erro na atualização:', error);
      if (!error.message) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  
  getUser: async (): Promise<User | null> => {
    const { data } = await supabase.auth.getUser();
    return data.user ?? null;
  },
  
  getSession: async (): Promise<Session | null> => {
    const { data } = await supabase.auth.getSession();
    return data.session ?? null;
  },
  
  onAuthStateChange: (callback: (event: string, session: Session | null) => void) => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => callback(event, session));
    return () => data.subscription.unsubscribe();
  },
};
