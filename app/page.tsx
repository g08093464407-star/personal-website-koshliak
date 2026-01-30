import { Header } from "@/components/header"
import { ProgressBar } from "@/components/progress-bar"
import { MotionSection } from "@/components/motion-section"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { WhyPartnership } from "@/components/why"
import { Format } from "@/components/format"
import { Fit } from "@/components/fit"
import { Writing } from "@/components/writing"
import { ManifestCTA } from "@/components/manifest-cta"
import { Contact } from "@/components/contact"
import { LegalSection } from "@/components/legal-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ProgressBar />

      <main>
        {/* Hero — без motion (перший екран має бути миттєвим) */}
        <Hero />

        <MotionSection>
          <About />
        </MotionSection>

        <MotionSection>
          <Work />
        </MotionSection>

        <MotionSection>
          <Services />
        </MotionSection>

        <MotionSection>
          <WhyPartnership />
        </MotionSection>

        <MotionSection>
          <Format />
        </MotionSection>

        <MotionSection>
          <Fit />
        </MotionSection>

        <MotionSection>
          <Writing />
        </MotionSection>

        <MotionSection>
          <ManifestCTA />
        </MotionSection>

        <MotionSection>
          <Contact />
        </MotionSection>

        {/* Юридика — без motion (низький пріоритет, “спокійний” блок) */}
        <LegalSection />
      </main>

      <Footer />
    </div>
  )
}
