import { supabase } from '@/lib/supabaseClient';

const BUCKET = 'logos'; // Create this bucket in Supabase Storage (public)

export const storageService = {
  uploadLogo: async (userId: string, file: Blob, options?: { contentType?: string; fileName?: string }) => {
    const ext = (options?.contentType?.split('/')[1]) || 'png';
    const name = options?.fileName || `${Date.now()}.${ext}`;
    const filePath = `${userId}/${name}`;

    const { error } = await supabase.storage.from(BUCKET).upload(filePath, file, {
      contentType: options?.contentType || 'image/png',
      upsert: false,
    });
    if (error) throw error;
    return { path: filePath };
  },
  getPublicUrl: (path: string) => {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
  },
  remove: async (path: string) => {
    const { error } = await supabase.storage.from(BUCKET).remove([path]);
    if (error) throw error;
  },
};
