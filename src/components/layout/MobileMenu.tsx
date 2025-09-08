import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Reserva de Quadra ou Campo", href: "#quadras" },
  { name: "Marcar Aula", href: "#aulas" },
  { name: "Reserva para Eventos", href: "#salao" },
  { name: "Escola do Flamengo", href: "#eventos" },
  { name: "Rotativo Volei", href: "#rotativo" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contato", href: "#contato" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-primary/95 backdrop-blur-md text-white border-none [&>button]:border-secondary [&>button]:text-secondary [&>button:hover]:bg-secondary/20 [&>button]:focus-visible:ring-secondary">
          <div className="pt-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-sports font-bold">
                <span className="text-white">NOVE</span>
                <span className="text-secondary">10</span>
              </h2>
              <p className="text-sm text-white/70 font-sports">COMPLEXO ESPORTIVO</p>
            </div>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-base font-medium text-white hover:text-secondary hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}