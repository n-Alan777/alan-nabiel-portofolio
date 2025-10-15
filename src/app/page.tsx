import { NavHeader } from "@/components/nav-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { GameShowcase } from "@/components/game-showcase"
import { AISkills } from "@/components/ai-skills"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <NavHeader />
      <main>
        <Hero />
        <AboutSection />
        <AISkills />
        <GameShowcase />
      </main>
      <SiteFooter />
    </>
  )
}
