import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LogoEditor } from "@/components/LogoEditor";
import { useState } from "react";


const Index = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("");
  
  const arenaCourts = [
    { name: "Quadra 1", price: "R$ 80/hora", available: true },
    { name: "Quadra 2", price: "R$ 60/hora", available: true },
    { name: "Quadra 3", price: "R$ 70/hora", available: true },
    { name: "Quadra 4", price: "R$ 60/hora", available: true },
    { name: "Campo de Futebol", price: "R$ 100/hora", available: true },
  ];

  const teachers = [
    { name: "Prof. Antonio", sport: "Beach Tennis", phone: "(21) 99791-0234" },
    { name: "Prof. Lucas", sport: "Beach Tennis", phone: "(48) 98469-3289" },
    { name: "Prof. Heitor", sport: "Futevolei", phone: "(48) 98426-3684" },
    { name: "Prof. Fernando", sport: "Futevolei", phone: "(48) 99915-8789" },
    { name: "Prof. Gerzem", sport: "Volei", phone: "(48) 99106-5759" },
    { name: "Prof. Ceará", sport: "Volei", phone: "(48) 99995-4995" },
  ];

  // Function to convert phone number to WhatsApp format
  const formatPhoneForWhatsApp = (phone: string) => {
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Add country code 55 for Brazil if not present
    return `55${cleanPhone}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Editor */}
      <LogoEditor 
        originalImageUrl="/lovable-uploads/bb76944f-d711-451f-86db-52de16cbd8c5.png"
        onProcessed={setProcessedLogoUrl}
      />
      
      {/* Header */}
      <header className="bg-black text-white py-6 px-6">
        <div className="container mx-auto">
          {/* Logo - Centered at top */}
          <div className="flex justify-center mb-4">
            <img 
              src={processedLogoUrl || "/lovable-uploads/bb76944f-d711-451f-86db-52de16cbd8c5.png"} 
              alt="Nove 10 Logo" 
              className="w-32 h-32 object-contain" 
            />
          </div>
          
          {/* Title - Below Logo with custom colors */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">
              <span className="text-gray-400">NOVE</span>
              <span className="text-orange-500">10</span>
            </h1>
            <p className="text-orange-500 text-lg font-semibold tracking-wide">COMPLEXO ESPORTIVO</p>
          </div>
          
          {/* Navigation - Below Title */}
          <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#quadras" className="hover:text-primary-foreground/80 transition-colors">Reserva de Quadra ou Campo</a>
              <a href="#aulas" className="hover:text-primary-foreground/80 transition-colors">Marcar Aula</a>
              <a href="#salao" className="hover:text-primary-foreground/80 transition-colors">Reserva para Eventos</a>
              <a href="#eventos" className="hover:text-primary-foreground/80 transition-colors">Escola do Flamengo</a>
              <a href="#rotativo" className="hover:text-primary-foreground/80 transition-colors">Rotativo Volei</a>
              <a href="#galeria" className="hover:text-primary-foreground/80 transition-colors">Galeria</a>
              <a href="#contato" className="hover:text-primary-foreground/80 transition-colors">Contato</a>
            </div>
          </nav>
          
          {/* WhatsApp Float Button */}
          <a
            href="https://wa.me/554832090284"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition z-50"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Seu Esporte, Nossa Paixão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O melhor complexo esportivo da região com quadras modernas, professores qualificados e estrutura completa para sua diversão e treino.
          </p>
        </div>
      </section>

      {/* Reserva de Quadras */}
      <section id="quadras" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Reserva de Quadras</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Escola do Flamengo */}
      <section id="eventos" className="py-16 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Escola do Flamengo</h3>
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
      <section id="rotativo" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Rotativo</h3>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center">Como funciona?</h4>
              <p className="text-lg text-center mb-8">
                É rotativo de vôlei de duplas! As pessoas se dividem nas quadras e jogam partidas curtas. Ao longo do tempo, as duplas vão se revezando para garantir que todos joguem.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center">Horários do Rotativo:</h4>
              <div className="grid md:grid-cols-2 gap-6">
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
