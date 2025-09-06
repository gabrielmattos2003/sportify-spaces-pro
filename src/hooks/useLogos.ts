import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { logoService } from '@/services/logoService';
import { storageService } from '@/services/storageService';
import { toast } from '@/hooks/use-toast';

export const useLogos = (userId: string | undefined) => {
  const queryClient = useQueryClient();

  const logosQuery = useQuery({
    queryKey: ['logos', userId],
    queryFn: () => logoService.listUserLogos(userId!),
    enabled: !!userId,
    staleTime: 60 * 1000,
  });

  const uploadMutation = useMutation({
    mutationFn: async (payload: { blob: Blob; fileName?: string; contentType?: string }) => {
      if (!userId) throw new Error('Not authenticated');
      const { path } = await storageService.uploadLogo(userId, payload.blob, {
        contentType: payload.contentType || 'image/png',
        fileName: payload.fileName,
      });
      const record = await logoService.saveLogo(userId, path);
      return record;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['logos', userId] });
    },
    onError: () => {
      // Erros já são tratados nos services
    },
  });

  return { logosQuery, uploadMutation };
};
