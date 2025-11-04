"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"

export function Message() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("mensaje")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="mensaje"
      className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl animate-float" />
        <div
          className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-black text-primary-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Envíanos un <span className="text-secondary">Mensaje</span>
            </h2>
            <p
              className={`text-lg text-primary-foreground/90 leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              ¿Tienes preguntas, sugerencias o quieres colaborar? Estamos aquí para escucharte.
            </p>
          </div>

          <div
            className={`rounded-2xl border-2 border-secondary bg-primary-foreground/10 backdrop-blur-sm p-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-primary-foreground/90 border-secondary/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="bg-primary-foreground/90 border-secondary/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder="Asunto"
                  className="bg-primary-foreground/90 border-secondary/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tu mensaje"
                  rows={6}
                  className="bg-primary-foreground/90 border-secondary/30 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg font-bold"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
