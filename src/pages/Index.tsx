import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";

const Index = () => {
  const courts = [
    { name: "Quadra de Futebol", price: "R$ 80/hora", available: true },
    { name: "Quadra de Vôlei", price: "R$ 60/hora", available: true },
    { name: "Quadra de Basquete", price: "R$ 70/hora", available: false },
    { name: "Quadra de Tênis", price: "R$ 90/hora", available: true },
  ];

  const teachers = [
    { name: "João Silva", sport: "Futebol", phone: "(11) 99999-1111", rating: 5 },
    { name: "Maria Santos", sport: "Vôlei", phone: "(11) 99999-2222", rating: 5 },
    { name: "Pedro Costa", sport: "Basquete", phone: "(11) 99999-3333", rating: 4 },
    { name: "Ana Oliveira", sport: "Tênis", phone: "(11) 99999-4444", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">N10</span>
            </div>
            <h1 className="text-2xl font-bold">Nove 10 Complexo Esportivo</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#quadras" className="hover:text-primary-foreground/80">Quadras</a>
            <a href="#aulas" className="hover:text-primary-foreground/80">Aulas</a>
            <a href="#galeria" className="hover:text-primary-foreground/80">Galeria</a>
            <a href="#contato" className="hover:text-primary-foreground/80">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Seu Esporte, Nossa Paixão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O melhor complexo esportivo da região com quadras modernas, professores qualificados e estrutura completa para sua diversão e treino.
          </p>
          <Button size="lg" variant="secondary" className="mr-4">
            Alugar Quadra
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Marcar Aula
          </Button>
        </div>
      </section>

      {/* Aluguel de Quadras */}
      <section id="quadras" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Aluguel de Quadras</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courts.map((court, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{court.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-4">{court.price}</p>
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
      <section id="aulas" className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Aulas Particulares</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <p className="text-primary font-semibold">{teacher.sport}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    {Array.from({ length: teacher.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
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
