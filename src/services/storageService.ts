import { supabase } from '@/lib/supabaseClient';
import { toast } from '@/hooks/use-toast';

const BUCKET = 'logos'; // Create this bucket in Supabase Storage (public)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const storageService = {
  uploadLogo: async (userId: string, file: Blob, options?: { contentType?: string; fileName?: string }) => {
    try {
      // Verificar tamanho do arquivo
      if (file.size > MAX_FILE_SIZE) {
        toast({ 
          title: 'Arquivo muito grande', 
          description: `O arquivo deve ter no máximo 5MB. Seu arquivo tem ${(file.size / 1024 / 1024).toFixed(1)}MB.`, 
          variant: 'destructive' 
        });
        throw new Error('File too large');
      }

      console.log('[Upload] Iniciando upload...');
      const ext = (options?.contentType?.split('/')[1]) || 'png';
      const name = options?.fileName || `${Date.now()}.${ext}`;
      const filePath = `${userId}/${name}`;

      const { error } = await supabase.storage.from(BUCKET).upload(filePath, file, {
        contentType: options?.contentType || 'image/png',
        upsert: false,
      });
      
      if (error) {
        console.error('[Upload] Erro no upload:', error);
        toast({ title: 'Erro', description: 'Erro ao fazer upload da imagem.', variant: 'destructive' });
        throw error;
      }
      
      console.log('[Upload] Upload bem-sucedido');
      toast({ title: 'Sucesso', description: 'Imagem enviada com sucesso!' });
      return { path: filePath };
    } catch (error) {
      console.error('[Upload] Erro geral:', error);
      if (!error.message?.includes('File too large') && !error.message?.includes('upload')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
  getPublicUrl: (path: string) => {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
  },
  remove: async (path: string) => {
    try {
      console.log('[Storage] Removendo arquivo...');
      const { error } = await supabase.storage.from(BUCKET).remove([path]);
      if (error) {
        console.error('[Storage] Erro ao remover:', error);
        toast({ title: 'Erro', description: 'Erro ao remover arquivo.', variant: 'destructive' });
        throw error;
      }
      console.log('[Storage] Arquivo removido');
    } catch (error) {
      console.error('[Storage] Erro geral:', error);
      if (!error.message?.includes('remove')) {
        toast({ title: 'Erro de conexão', description: 'Verifique sua conexão e tente novamente.', variant: 'destructive' });
      }
      throw error;
    }
  },
};
