import { useEffect, useRef } from 'react';

interface UseLogoEditorProps {
  originalImageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

export const useLogoEditor = ({ originalImageUrl, onProcessed }: UseLogoEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Load the original image
        const img = new Image();
        img.onload = () => {
          // Set canvas size
          canvas.width = 200;
          canvas.height = 200;

          // Clear canvas with transparent background
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Calculate the position to center the logo symbol (top part only)
          const logoHeight = img.height * 0.6; // Take only top 60% to exclude text
          const scale = Math.min(canvas.width / img.width, canvas.height / logoHeight);
          const scaledWidth = img.width * scale;
          const scaledHeight = logoHeight * scale;
          const x = (canvas.width - scaledWidth) / 2;
          const y = (canvas.height - scaledHeight) / 2;

          // Draw only the top portion of the logo (excluding text)
          ctx.drawImage(
            img,
            0, 0, img.width, logoHeight, // Source: full width, top 60% height
            x, y, scaledWidth, scaledHeight // Destination: centered and scaled
          );

          // Convert canvas to blob and create URL
          canvas.toBlob((blob) => {
            if (blob) {
              const processedUrl = URL.createObjectURL(blob);
              onProcessed(processedUrl);
            }
          }, 'image/png');
        };

        img.crossOrigin = 'anonymous';
        img.src = originalImageUrl;

      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original image
        onProcessed(originalImageUrl);
      }
    };

    processLogo();
  }, [originalImageUrl, onProcessed]);

  return { canvasRef };
};