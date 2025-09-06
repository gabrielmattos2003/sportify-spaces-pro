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
        <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black text-white">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}