'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'
import { ShinyButton } from '@/modules/animations/shiny-button'

const delay = 0.2

export function HeroSection() {
  return (
    <header className="container mx-auto flex flex-col items-center gap-10 pt-5">
      <BlurFade
        direction="up"
        className="bg-muted size-16 overflow-hidden rounded-2xl md:size-20"
        delay={delay}
      >
        <ShinyButton className="flex size-full items-center justify-center p-0">
          <Image
            src="brand/logo-light.svg"
            alt="ShipX Logo"
            width={55}
            height={55}
            className="object-contain select-none"
          />
        </ShinyButton>
      </BlurFade>
      <div className="flex w-full flex-col items-center gap-5 text-center md:max-w-6xl">
        <TextAnimate
          as="h1"
          duration={0.4}
          once
          className="text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-16"
        >
          ShipX is a platform to manage your social & business life
        </TextAnimate>
        <TextAnimate
          as="p"
          delay={0.7}
          animation="blurIn"
          once
          className="text-muted-foreground max-w-4xl text-sm md:text-base lg:text-lg"
        >
          Our platform is designed to help you streamline your social and
          business interactions, making it easier to manage your online life.
        </TextAnimate>
      </div>
      <BlurFade
        direction="up"
        className="flex items-center gap-2"
        delay={delay + 0.5}
      >
        <Button asChild className="h-11 rounded-full text-base">
          <Link href="/signup">Join for free</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-full text-base hover:border-zinc-300"
        >
          <Link href="/pricing">
            See our plans
            <div className="bg-muted text-muted-foreground flex size-6 items-center justify-center rounded-full dark:border">
              <ArrowRight />
            </div>
          </Link>
        </Button>
      </BlurFade>
      <div className="my-12 flex flex-col items-center gap-8">
        <TextAnimate
          as="p"
          className="text-muted-foreground text-sm font-medium"
          delay={1.2}
          animation="slideUp"
          by="word"
          once
        >
          Trusted by interpreneurs and companies around the world
        </TextAnimate>
        <BlurFade
          direction="up"
          className="flex flex-wrap items-center justify-center gap-12"
          delay={0.8}
          inView
          inViewMargin="-50px"
        >
          <Image
            src="logos/uber-logo.svg"
            alt="Uber"
            width={50}
            height={40}
            className="h-5 w-auto object-contain"
          />
          <Image
            src="logos/headspace-logo.svg"
            alt="Headspace"
            width={50}
            height={40}
            className="h-7 w-auto object-contain"
          />
          <Image
            src="logos/meta-logo.svg"
            alt="Meta"
            width={50}
            height={40}
            className="h-5 w-auto object-contain"
          />
          <Image
            src="logos/airbnb-logo.svg"
            alt="Airbnb"
            width={50}
            height={40}
            className="h-7 w-auto object-contain"
          />
          <Image
            src="logos/revolut-logo.svg"
            alt="Revolut"
            width={50}
            height={40}
            className="h-4 w-auto object-contain"
          />
          <Image
            src="logos/metalab-logo.svg"
            alt="Metalab"
            width={50}
            height={40}
            className="h-[1.2rem] w-auto object-contain"
          />
          <Image
            src="logos/pinterest-logo.svg"
            alt="Pinterest"
            width={50}
            height={40}
            className="h-6 w-auto object-contain"
          />
        </BlurFade>
      </div>
      <BlurFade
        direction="up"
        className="bg-muted/70 mx-auto h-[46rem] w-full max-w-full overflow-hidden rounded-3xl"
        delay={1}
        inView
        inViewMargin="-50px"
      >
        &nbsp;
      </BlurFade>
    </header>
  )
}
