import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { Services } from "@/components/landing/Services"
import { Differentials } from "@/components/landing/Differentials"
import { Process } from "@/components/landing/Process"
import { Cases } from "@/components/landing/Cases"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"
import { Contact } from "@/components/landing/Contact"
import { Footer } from "@/components/landing/Footer"
import { siteContent } from "@/content/siteContent"
import { useMagnetic } from "@/hooks/useMagnetic"
import { usePointerGlow } from "@/hooks/usePointerGlow"

export default function Home() {
  useMagnetic()
  usePointerGlow()

  const goToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const goToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="pointer-glow" aria-hidden="true" />
      <Header onCta={goToContact} />
      <main>
        <Hero onPrimaryCta={goToContact} onSecondaryCta={goToServices} />
        <Services />
        <Differentials />
        <Process />
        <Cases />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
