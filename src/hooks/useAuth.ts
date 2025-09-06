import { useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { authService } from '@/services/authService';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const currentSession = await authService.getSession();
      setSession(currentSession);
      const currentUser = await authService.getUser();
      setUser(currentUser);
      setLoading(false);
    })();

    const unsubscribe = authService.onAuthStateChange(async (_event, s) => {
      setSession(s);
      const u = await authService.getUser();
      setUser(u);
    });
    return unsubscribe;
  }, []);

  return { user, session, loading };
};
