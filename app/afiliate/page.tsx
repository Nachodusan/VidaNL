import { Header } from "@/components/header"
import { Affiliate } from "@/components/affiliate"
import { Footer } from "@/components/footer"

export default function AfiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Affiliate />
      </main>
      <Footer />
    </div>
  )
}
