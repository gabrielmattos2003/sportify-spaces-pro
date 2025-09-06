import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, User, LogIn } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePhoneFormatter } from "@/hooks/usePhoneFormatter";
import { arenaCourts, teachers } from "@/utils/sportsData";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@/components/ui/spinner";

const Home = () => {
  const { formatPhoneForWhatsApp } = usePhoneFormatter();
  const { user, loading } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card text-card-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-muted-foreground">NOVE</span>
                <span className="text-secondary">10</span>
              </h1>
              <span className="ml-2 text-xs sm:text-sm text-secondary font-semibold tracking-wide hidden sm:inline">
                COMPLEXO ESPORTIVO
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#quadras" className="text-sm hover:text-primary transition-colors">Quadras</a>
              <a href="#aulas" className="text-sm hover:text-primary transition-colors">Aulas</a>
              <a href="#salao" className="text-sm hover:text-primary transition-colors">Eventos</a>
              <a href="#eventos" className="text-sm hover:text-primary transition-colors">Flamengo</a>
              <a href="#rotativo" className="text-sm hover:text-primary transition-colors">Rotativo</a>
              <a href="#galeria" className="text-sm hover:text-primary transition-colors">Galeria</a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {loading ? (
                <Spinner size="sm" />
              ) : user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    {user.email}
                  </span>
                  <Button 
                    size="sm" 
                    onClick={() => window.location.href = "/dashboard"}
                  >
                    <User className="h-4 w-4 mr-1" />
                    Dashboard
                  </Button>
                </div>
              ) : (
                <Button 
                  size="sm" 
                  onClick={() => setAuthDialogOpen(true)}
                >
                  <LogIn className="h-4 w-4 mr-1" />
                  Entrar
                </Button>
              )}
              
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/554832090284"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 sm:p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
      </a>

      {/* Auth Dialog */}
      <AuthDialog 
        open={authDialogOpen} 
        onOpenChange={setAuthDialogOpen} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Seu Esporte, Nossa Paixão
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            O melhor complexo esportivo da região com quadras modernas, professores qualificados e estrutura completa para sua diversão e treino.
          </p>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Explorar Instalações
          </Button>
        </div>
      </section>

      {/* Reserva de Quadras */}
      <section id="quadras" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Reserva de Quadras</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {arenaCourts.map((court, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{court.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-4">{court.price}</p>
                  <div className="flex items-center mb-4">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Disponível 6h-22h</span>
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={!court.available}
                    variant={court.available ? "default" : "secondary"}
                  >
                    {court.available ? "Reservar" : "Indisponível"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aulas */}
      <section id="aulas" className="py-12 sm:py-16 px-4 sm:px-6 bg-muted">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Aulas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <p className="text-secondary font-semibold">{teacher.sport}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{teacher.phone}</span>
                  </div>
                  <a
                    href={`https://wa.me/${formatPhoneForWhatsApp(teacher.phone)}?text=Olá ${teacher.name}, gostaria de marcar uma aula de ${teacher.sport}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">
                      Marcar Aula
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aluguel do Salão */}
      <section id="salao" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Aluguel do Salão</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Espaço amplo e climatizado, ideal para festas, eventos corporativos e comemorações.
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Salão de Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-secondary mb-4">R$ 200/hora</p>
              <p className="text-sm text-muted-foreground mb-4">Capacidade: 100 pessoas</p>
              <Button className="w-full">
                Reservar Salão
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Escola do Flamengo */}
      <section id="eventos" className="py-12 sm:py-16 px-4 sm:px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Escola do Flamengo</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Bem-vindo à sua Escola de Futebol Flamengo em Florianópolis — aqui começa o seu sonho dentro das quatro linhas!
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Escola Flamengo Florianópolis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-lg">(48) 98806-0411</span>
              </div>
              <Button className="w-full">
                Entrar em Contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rotativo */}
      <section id="rotativo" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Rotativo</h3>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center">Como funciona?</h4>
              <p className="text-base sm:text-lg text-center mb-6 sm:mb-8">
                É rotativo de vôlei de duplas! As pessoas se dividem nas quadras e jogam partidas curtas. Ao longo do tempo, as duplas vão se revezando para garantir que todos joguem.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center">Horários do Rotativo:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quarta-feira: 21h às 00h</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">• 1 quadra das 21h às 22h</p>
                    <p className="text-sm">• +2 quadras das 22h às 00h</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sexta-feira: 16h às 21h</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">• 3 quadras disponíveis</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Participar do Rotativo</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Vôlei
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Nossas Instalações</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative h-48 sm:h-64 bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Instalação {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Nove 10 Complexo Esportivo</h4>
              <p className="mb-4">O melhor local para praticar esportes com qualidade e segurança.</p>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Rua dos Esportes, 123 - São Paulo</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Horário de Funcionamento</h5>
              <p className="text-sm">Segunda a Sexta: 6h às 22h</p>
              <p className="text-sm">Sábado e Domingo: 7h às 20h</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <p className="text-sm mb-2">📞 (11) 1234-5678</p>
              <p className="text-sm mb-2">📧 contato@complexoesportivo.com</p>
              <p className="text-sm">💬 WhatsApp: (11) 99999-0000</p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm">&copy; 2024 Nove 10 Complexo Esportivo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;