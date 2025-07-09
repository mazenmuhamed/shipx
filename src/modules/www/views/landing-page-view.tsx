import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

import { HeroSection } from '../components/sections/hero-section'
import { FeaturesSection } from '../components/sections/features-section'
import { TestimonialSection } from '../components/sections/testimonials-section'
import { MartketplaceFeaturesSection } from '../components/sections/marketplace-features-section'

export function LandingPageView() {
  return (
    <>
      <main className="bg-background relative z-30 mb-[28rem] min-h-svh space-y-32 px-4 pb-24 sm:rounded-b-4xl sm:pb-48 md:px-8 lg:px-0">
        <Navbar />
        <HeroSection />
        <div className="container mx-auto flex w-full max-w-6xl flex-col gap-36">
          <FeaturesSection />
          <TestimonialSection />
          <MartketplaceFeaturesSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
