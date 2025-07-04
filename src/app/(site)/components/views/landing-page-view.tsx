import { Footer } from '../sections/footer'
import { Navbar } from '../navbar'
import { HeroSection } from '../sections/hero-section'
import { FeaturesSection } from '../sections/features-section'
import { TestimonialSection } from '../sections/testimonials-section'
import { MartketplaceFeaturesSection } from '../sections/marketplace-features-section'

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
