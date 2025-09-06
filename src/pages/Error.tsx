import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

interface ErrorPageProps {
  error?: Error
  statusCode?: 404 | 500
}

export default function ErrorPage({ error, statusCode = 404 }: ErrorPageProps) {
  const is404 = statusCode === 404
  
  const handleRefresh = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">
            {is404 ? "Página Não Encontrada" : "Erro do Servidor"}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-6xl font-bold text-muted-foreground">
            {statusCode}
          </div>
          
          <p className="text-muted-foreground">
            {is404 
              ? "A página que você está procurando não existe ou foi movida."
              : "Ocorreu um erro interno no servidor. Tente novamente em alguns instantes."
            }
          </p>
          
          {error && !is404 && (
            <div className="bg-muted p-3 rounded-md text-left">
              <p className="text-sm text-muted-foreground break-all">
                {error.message}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={handleGoHome} className="flex-1">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
            
            {!is404 && (
              <Button variant="outline" onClick={handleRefresh} className="flex-1">
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}