import { Footer } from '../components/footer'

import { PricingNavbar } from '../components/pricing/pricing-navbar'
import { PricingFAQsSection } from '../components/sections/pricing-faqs-section'
import { PricingHeroSection } from '../components/sections/pricing-hero-section'
import { PricingLogosSection } from '../components/sections/pricing-logos-section'

export function PricingPageView() {
  return (
    <div className="min-h-svh">
      <PricingNavbar />
      <main className="space-y-28 py-16 sm:space-y-32 sm:py-28 md:space-y-44">
        <PricingHeroSection />
        <PricingLogosSection />
        <PricingFAQsSection />
      </main>
      <Footer className="bg-background text-foreground dark:bg-popover dark:text-popover-foreground relative" />
    </div>
  )
}
