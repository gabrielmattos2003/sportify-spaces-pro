import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star, User, LogIn } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePhoneFormatter } from "@/hooks/usePhoneFormatter";
import { arenaCourts, teachers } from "@/utils/sportsData";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import heroSportsBg from "@/assets/hero-sports-bg.jpg";

const Home = () => {
  const { formatPhoneForWhatsApp } = usePhoneFormatter();

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-card/95 backdrop-blur-md text-card-foreground shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation - Left */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#quadras" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Quadras</a>
              <a href="#aulas" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Aulas</a>
              <a href="#salao" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Eventos</a>
            </nav>

            {/* Logo - Center */}
            <div className="flex items-center justify-center flex-1 md:flex-initial">
              <h1 className="text-2xl sm:text-3xl font-sports font-bold">
                <span className="text-primary">NOVE</span>
                <span className="text-secondary">10</span>
              </h1>
              <span className="ml-3 text-xs sm:text-sm text-secondary font-sports font-semibold tracking-wider hidden sm:inline">
                COMPLEXO ESPORTIVO
              </span>
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#eventos" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Flamengo</a>
              <a href="#rotativo" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Rotativo</a>
              <a href="#galeria" className="text-sm font-medium hover:text-secondary transition-colors duration-300">Galeria</a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
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


      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroSportsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 container mx-auto text-center px-6 sm:px-8 lg:px-12 pt-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-sports font-bold mb-6 sm:mb-8 animate-fade-in-up">
            Seu Esporte, Nossa <span className="text-secondary">Paixão</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-90">
            O melhor complexo esportivo da região com quadras modernas, professores qualificados e estrutura completa para sua diversão e treino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="btn-sports text-lg px-8 py-4 h-auto">
              Explorar Instalações
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-4 h-auto">
              Ver Quadras
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Reserva de Quadras */}
      <section id="quadras" className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-bold mb-4 sm:mb-6">
              Reserva de <span className="text-secondary">Quadras</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Quadras modernas e bem equipadas para todos os esportes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {arenaCourts.map((court, index) => (
              <Card key={index} className="card-modern bg-gradient-to-br from-card to-card/80">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-sports">{court.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-3xl font-sports font-bold text-secondary">{court.price}</p>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Disponível 6h-22h</span>
                  </div>
                  <Button 
                    className={`w-full font-semibold ${court.available ? 'btn-sports' : ''}`}
                    disabled={!court.available}
                    variant={court.available ? "default" : "secondary"}
                  >
                    {court.available ? "Reservar Agora" : "Indisponível"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aulas */}
      <section id="aulas" className="py-16 sm:py-24 px-6 sm:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-bold mb-4 sm:mb-6">
              Aulas <span className="text-secondary">Personalizadas</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professores experientes para elevar seu desempenho esportivo
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="card-modern bg-gradient-to-br from-card to-card/80">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-sports">{teacher.name}</CardTitle>
                  <p className="text-secondary font-sports font-semibold text-lg">{teacher.sport}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm font-medium">{teacher.phone}</span>
                  </div>
                  <a
                    href={`https://wa.me/${formatPhoneForWhatsApp(teacher.phone)}?text=Olá ${teacher.name}, gostaria de marcar uma aula de ${teacher.sport}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full btn-sports">
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
      <section id="salao" className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="container mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-bold mb-4 sm:mb-6">
              Salão de <span className="text-secondary">Eventos</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Espaço amplo e climatizado, ideal para festas, eventos corporativos e comemorações especiais.
            </p>
          </div>
          <Card className="max-w-lg mx-auto card-modern bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-sports">Salão de Eventos Premium</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-4xl font-sports font-bold text-secondary">R$ 200<span className="text-lg">/hora</span></p>
              <div className="space-y-2">
                <p className="text-muted-foreground">✓ Capacidade: 100 pessoas</p>
                <p className="text-muted-foreground">✓ Ar condicionado</p>
                <p className="text-muted-foreground">✓ Sistema de som</p>
                <p className="text-muted-foreground">✓ Estacionamento</p>
              </div>
              <Button className="w-full btn-sports text-lg py-3">
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Vôlei
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-bold mb-4 sm:mb-6">
              Nossas <span className="text-secondary">Instalações</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça nossos espaços modernos e bem equipados
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative h-64 sm:h-80 bg-muted rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent group-hover:from-secondary/70 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-muted group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-sports font-semibold text-xl">Instalação {index + 1}</p>
                  <p className="text-sm opacity-90 mt-1">Equipamentos modernos</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-2xl">→</span>
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