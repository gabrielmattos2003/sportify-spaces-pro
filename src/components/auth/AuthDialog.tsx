import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { authService } from "@/services/authService"
import { useToast } from "@/hooks/use-toast"
import { Spinner } from "@/components/ui/spinner"
import { Github, Mail } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  const handleEmailAuth = async () => {
    if (!email || !password) return
    
    setLoading(true)
    try {
      if (isLogin) {
        await authService.signInWithEmail(email, password)
      } else {
        await authService.signUpWithEmail(email, password)
      }
      onOpenChange(false)
    } catch (error: any) {
      // Os erros já são tratados nos services com toasts
    } finally {
      setLoading(false)
    }
  }

  const handleSocialAuth = async (provider: 'google' | 'github') => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin
        }
      })
      if (error) throw error
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        title: "Email necessário",
        description: "Digite seu email para recuperar a senha.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      await authService.resetPassword(email)
      setShowForgotPassword(false)
    } catch (error: any) {
      // Os erros já são tratados no service com toasts
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {showForgotPassword ? "Recuperar Senha" : (isLogin ? "Entrar" : "Cadastrar")}
          </DialogTitle>
          <DialogDescription>
            {showForgotPassword 
              ? "Digite seu email para receber as instruções de recuperação" 
              : (isLogin 
                ? "Entre com sua conta para acessar o dashboard" 
                : "Crie sua conta para gerenciar suas reservas")}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {showForgotPassword ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>

              <Button
                onClick={handleForgotPassword}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={loading}
              >
                {loading && <Spinner size="sm" className="mr-2" />}
                Enviar Email de Recuperação
              </Button>

              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="text-secondary hover:underline"
                >
                  Voltar ao login
                </button>
              </div>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => handleSocialAuth('google')}
                disabled={loading}
                className="w-full border-secondary/20 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/40"
              >
                {loading && <Spinner size="sm" className="mr-2" />}
                {!loading && <Mail className="mr-2 h-4 w-4" />}
                Continuar com Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Ou continue com email
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  {isLogin && (
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-xs text-secondary hover:underline"
                    >
                      Esqueceu a senha?
                    </button>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <Button
                onClick={handleEmailAuth}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={loading}
              >
                {loading && <Spinner size="sm" className="mr-2" />}
                {isLogin ? "Entrar" : "Cadastrar"}
              </Button>

              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-secondary hover:underline"
                >
                  {isLogin 
                    ? "Não tem uma conta? Cadastre-se" 
                    : "Já tem uma conta? Entrar"}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}