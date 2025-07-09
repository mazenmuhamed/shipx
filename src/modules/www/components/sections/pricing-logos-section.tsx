'use client'

import Image from 'next/image'

import { Marquee } from '@/modules/animations/marquee'
import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'

export function PricingLogosSection() {
  return (
    <BlurFade
      direction="up"
      inView
      inViewMargin="-50px"
      className="flex flex-col items-center gap-8 px-6 sm:px-8 md:px-4"
    >
      <TextAnimate
        as="h2"
        duration={0.4}
        once
        className="text-center text-xl font-semibold sm:text-2xl lg:text-3xl lg:leading-16"
      >
        Used by leading design & product teams.
      </TextAnimate>
      <Marquee className="items-center [--duration:40s]">
        <div className="flex flex-wrap items-center justify-center gap-20">
          <Image
            src="logos/uber-logo.svg"
            alt="Uber"
            width={50}
            height={50}
            className="ml-16 h-6 w-auto object-contain md:h-7"
          />
          <Image
            src="logos/headspace-logo.svg"
            alt="Headspace"
            width={50}
            height={50}
            className="h-6 w-auto object-contain md:h-7"
          />
          <Image
            src="logos/meta-logo.svg"
            alt="Meta"
            width={50}
            height={50}
            className="h-6 w-auto object-contain md:h-7"
          />
          <Image
            src="logos/airbnb-logo.svg"
            alt="Airbnb"
            width={50}
            height={50}
            className="h-8 w-auto object-contain md:h-9"
          />
          <Image
            src="logos/revolut-logo.svg"
            alt="Revolut"
            width={50}
            height={50}
            className="h-6 w-auto object-contain md:h-7"
          />
          <Image
            src="logos/metalab-logo.svg"
            alt="Metalab"
            width={50}
            height={50}
            className="h-6 w-auto object-contain md:h-7"
          />
          <Image
            src="logos/pinterest-logo.svg"
            alt="Pinterest"
            width={50}
            height={50}
            className="h-7 w-auto object-contain md:h-8"
          />
        </div>
      </Marquee>
    </BlurFade>
  )
}
