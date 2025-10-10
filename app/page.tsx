import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { ScienceSection } from "@/components/science-section"
import { PricingSection } from "@/components/pricing-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ComparisonSection } from "@/components/comparison-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UsageInstructionsSection } from "@/components/usage-instructions-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { OrderFormSection } from "@/components/order-form-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <CTASection />
      <ScienceSection />
      <PricingSection />
      <ProblemSolutionSection />
      <ComparisonSection />
      <HowItWorksSection />
      <UsageInstructionsSection />
      <FinalCTASection />
      <OrderFormSection />
    </main>
  )
}
