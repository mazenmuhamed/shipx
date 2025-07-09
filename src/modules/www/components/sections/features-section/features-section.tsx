import { AIFeatures } from './AI-features'
import { PlatformFeatures } from './plateform-features'

import { TextAnimate } from '@/modules/animations/text-animate'

export function FeaturesSection() {
  return (
    <section className="flex w-full max-w-6xl flex-col gap-12">
      <div className="flex flex-col gap-4">
        <TextAnimate
          as="h2"
          className="text-center text-3xl font-bold md:text-4xl"
          delay={0.1}
          once
        >
          Features that make your life easier
        </TextAnimate>
        <TextAnimate
          as="p"
          className="text-muted-foreground text-center text-sm"
          delay={0.3}
          once
        >
          First social media platform that allows you to manage your social and
          business life in one place powered by AI.
        </TextAnimate>
      </div>
      <PlatformFeatures />
      <AIFeatures />
    </section>
  )
}
