import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/imageProcessing';

interface UseLogoProcessorProps {
  originalImageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

export const useLogoProcessor = ({ originalImageUrl, onProcessed }: UseLogoProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original image
        const response = await fetch(originalImageUrl);
        const blob = await response.blob();
        
        // Load image
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        onProcessed(processedUrl);
        
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original image
        onProcessed(originalImageUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalImageUrl, onProcessed]);

  return { isProcessing };
};