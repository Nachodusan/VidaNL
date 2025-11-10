import { Header } from "@/components/header"
import { Volunteer } from "@/components/volunteer"
import { Footer } from "@/components/footer"

export default function AfiliatePage() {  // misma ruta, mismo look&feel
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Volunteer />
      </main>
      <Footer />
    </div>
  )
}
