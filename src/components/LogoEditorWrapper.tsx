import { useLogoEditor } from '@/hooks/useLogoEditor';

interface LogoEditorWrapperProps {
  originalImageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

export const LogoEditorWrapper = ({ originalImageUrl, onProcessed }: LogoEditorWrapperProps) => {
  const { canvasRef } = useLogoEditor({ originalImageUrl, onProcessed });
  
  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
};