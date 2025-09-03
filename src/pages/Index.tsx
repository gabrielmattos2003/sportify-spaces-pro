import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";


const Index = () => {
  const arenaCourts = [
    { name: "Quadra de Futebol", price: "R$ 80/hora", available: true },
    { name: "Vôlei de Praia", price: "R$ 60/hora", available: true },
    { name: "Beach Tênis", price: "R$ 70/hora", available: true },
    { name: "Futvolei", price: "R$ 60/hora", available: true },
  ];

  const grassCourt = [
    { name: "Quadra de Grama", price: "R$ 100/hora", available: true },
  ];

  const teachers = [
    { name: "Prof. Antonio", sport: "Beach Tennis", phone: "(21) 99791-0234" },
    { name: "Prof. Lucas", sport: "Beach Tennis", phone: "(48) 98469-3289" },
    { name: "Prof. Heitor", sport: "Futevolei", phone: "(48) 98426-3684" },
    { name: "Prof. Fernando", sport: "Futevolei", phone: "(48) 99915-8789" },
    { name: "Prof. Gerzem", sport: "Volei", phone: "(48) 99106-5759" },
    { name: "Prof. Ceará", sport: "Volei", phone: "(48) 99995-4995" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto">
          {/* Logo and Name - Centered */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src="/src/assets/logotipo_nove10.png" alt="Nove 10 Logo" className="w-16 h-16" />
            <h1 className="text-3xl font-bold">Nove 10 Complexo Esportivo</h1>
          </div>
          
          {/* Navigation - Below Logo */}
          <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#quadras" className="hover:text-primary-foreground/80 transition-colors">Aluguel de Quadra</a>
              <a href="#aulas" className="hover:text-primary-foreground/80 transition-colors">Marcar Aula</a>
              <a href="#salao" className="hover:text-primary-foreground/80 transition-colors">Aluguel do Salão</a>
              <a href="#eventos" className="hover:text-primary-foreground/80 transition-colors">Marcar Eventos</a>
              <a href="#rotativo" className="hover:text-primary-foreground/80 transition-colors">Rotativo</a>
              <a href="#galeria" className="hover:text-primary-foreground/80 transition-colors">Galeria</a>
              <a href="#contato" className="hover:text-primary-foreground/80 transition-colors">Contato</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Seu Esporte, Nossa Paixão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O melhor complexo esportivo da região com quadras modernas, professores qualificados e estrutura completa para sua diversão e treino.
          </p>
          <Button size="lg" variant="default" className="mr-4">
            Alugar Quadra
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            Marcar Aula
          </Button>
        </div>
      </section>

      {/* Aluguel de Quadras */}
      <section id="quadras" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Aluguel de Quadras</h3>
          
          {/* Quadras de Areia */}
          <h4 className="text-2xl font-bold text-center mb-8 text-secondary">Quadras de Areia</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          {/* Quadra de Grama */}
          <h4 className="text-2xl font-bold text-center mb-8 text-secondary">Quadra de Grama</h4>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 justify-center">
            <div className="max-w-sm mx-auto">
              {grassCourt.map((court, index) => (
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
        </div>
      </section>

      {/* Aulas */}
      <section id="aulas" className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Aulas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <Button className="w-full">
                    Marcar Aula
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aluguel do Salão */}
      <section id="salao" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Aluguel do Salão</h3>
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

      {/* Marcar Eventos */}
      <section id="eventos" className="py-16 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Marcar Eventos</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Organizamos torneios, campeonatos e eventos esportivos personalizados.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Torneios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Organizamos torneios de futebol, vôlei e beach tênis.</p>
                <Button className="w-full">Solicitar Orçamento</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eventos Corporativos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Team building e confraternizações empresariais.</p>
                <Button className="w-full">Solicitar Orçamento</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Festas Esportivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Aniversários e comemorações com tema esportivo.</p>
                <Button className="w-full">Solicitar Orçamento</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rotativo */}
      <section id="rotativo" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Rotativo do Dia</h3>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            Cadastre-se no rotativo e encontre outros jogadores para formar equipes!
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Participar do Rotativo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Informe seu nome e modalidade de interesse
              </p>
              <Button className="w-full mb-2">
                Futebol
              </Button>
              <Button className="w-full mb-2" variant="outline">
                Vôlei de Praia
              </Button>
              <Button className="w-full mb-2" variant="outline">
                Beach Tênis
              </Button>
              <Button className="w-full" variant="outline">
                Futvolei
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Nossas Instalações</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative h-64 bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform">
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
      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
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

export default Index;
