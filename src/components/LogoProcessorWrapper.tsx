import { useLogoProcessor } from '@/hooks/useLogoProcessor';

interface LogoProcessorWrapperProps {
  originalImageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

export const LogoProcessorWrapper = ({ originalImageUrl, onProcessed }: LogoProcessorWrapperProps) => {
  useLogoProcessor({ originalImageUrl, onProcessed });
  return null;
};