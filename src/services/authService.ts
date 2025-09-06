import { supabase } from '@/lib/supabaseClient';
import type { User, Session } from '@supabase/supabase-js';

export const authService = {
  signUpWithEmail: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  },
  signInWithEmail: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
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
