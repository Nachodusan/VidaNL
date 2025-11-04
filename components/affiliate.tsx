"use client"

import { UserPlus, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export function Affiliate() {
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

    const element = document.getElementById("afiliate")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    "Voz y voto en las decisiones del partido",
    "Acceso a capacitaciones y talleres",
    "Participación en eventos exclusivos",
    "Red de contactos y comunidad activa",
    "Oportunidades de liderazgo",
  ]

  return (
    <section id="afiliate" className="py-12 md:py-20 bg-white">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-primary">Afíliate</span> a VIDA
            </h2>
            <p
              className={`text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Únete a miles de personas comprometidas con el cambio. Tu participación es fundamental para construir el
              futuro que queremos.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Beneficios de afiliarte:</h3>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-4 text-gray-700"
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-700 delay-300 p-8 md:p-10 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Formulario de Afiliación</h3>
              </div>
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Nombre completo"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Teléfono"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Ciudad"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  Enviar Solicitud
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
