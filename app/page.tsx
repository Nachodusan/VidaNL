import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle" // 👈 usamos el que ya tienes

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fondo oscuro decorativo */}
      <div className="fixed inset-0 pointer-events-none dark:bg-gradient-to-b dark:from-yellow-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 z-[100] mix-blend-multiply" />

      {/* 🔆 Botón flotante de modo noche (usa el existente) */}
      <div className="fixed right-4 top-4 z-[200] pointer-events-auto">
        <ThemeToggle />
      </div>

      <Header />
      <main className="relative z-0">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
