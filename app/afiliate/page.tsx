import { Header } from "@/components/header"
import { Affiliate } from "@/components/affiliate"
import { Footer } from "@/components/footer"

export default function AfiliatePage() {
  return (
    // ✅ Ahora usa variables del tema (funciona en modo oscuro y claro)
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Affiliate />
      </main>
      <Footer />
    </div>
  )
}
