import { PricingNavbar } from '../pricing-navbar'
import { PricingHeroSection } from '../sections/pricing-hero-section'
import { PricingLogosSection } from '../pricing-logos-section'
import { PricingFAQs } from '../pricing-faqs'
import { Footer } from '../sections/footer'

export function PricingPageView() {
  return (
    <div className="min-h-svh">
      <PricingNavbar />
      <main className="space-y-28 py-16 sm:space-y-32 sm:py-28 md:space-y-44">
        <PricingHeroSection />
        <PricingLogosSection />
        <PricingFAQs />
      </main>
      <Footer className="bg-background text-foreground dark:bg-background relative [&_img]:invert-0 dark:[&_img]:invert" />
    </div>
  )
}
