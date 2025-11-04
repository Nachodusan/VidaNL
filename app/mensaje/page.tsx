import { Header } from "@/components/header"
import { Message } from "@/components/message"
import { Footer } from "@/components/footer"

export default function MensajePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Message />
      </main>
      <Footer />
    </div>
  )
}
