import { ArrowUp, Globe, Play, Plus, Signature, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { BlurFade } from '../../animations/blur-fade'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export function AIFeatures() {
  return (
    <BlurFade
      className="mx-auto mt-12 w-full max-w-5xl px-6"
      direction="up"
      delay={0.4}
      duration={0.5}
      inView
    >
      <h2 className="text-foreground text-3xl font-semibold text-balance md:text-4xl">
        <span className="text-muted-foreground">
          Mangage your social and business life with{' '}
        </span>{' '}
        <span className="text-foreground">AI-powered features</span>
      </h2>
      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <div className="col-span-full space-y-4">
          <Card className="bg-muted/80 text-muted-foreground overflow-hidden px-6 sm:col-span-2">
            <div className="mx-auto -mt-2 max-w-sm mask-b-from-75% px-2 pt-8">
              <AIAssistantIllustration />
            </div>
          </Card>
          <div className="max-w-md sm:col-span-3">
            <h3 className="text-foreground text-lg font-semibold">
              AI-Powered Assistant
            </h3>
            <p className="text-muted-foreground mt-3 text-balance">
              Our AI assistant helps you to takes decisions, manage your
              business, and making your life easier and more efficient.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_auto] space-y-4">
          <Card className="bg-muted/80 text-muted-foreground p-6">
            <MeetingIllustration />
          </Card>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              AI Live Translation
            </h3>
            <p className="text-muted-foreground mt-3 text-balance">
              Our AI translates your meetings in real-time, breaking down
              language barriers and enhancing collaboration.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-[1fr_auto] space-y-4">
          <Card className="bg-muted/80 text-muted-foreground overflow-hidden p-6">
            <CodeReviewIllustration />
          </Card>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              Intelligent Analysis Market
            </h3>
            <p className="text-muted-foreground mt-3 text-balance">
              Our AI analyzes market trends and provides insights ensuring your
              business stays ahead of the competition.
            </p>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="relative hidden h-fit">
        <div className="absolute bottom-1.5 -left-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">
          PDF
        </div>
        <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
      </div>
      <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">2:30 - 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        <div className="flex -space-x-1.5">
          {[
            { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
            { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
            { src: THEO_AVATAR, alt: 'Théo Balick' },
            { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
          ].map((avatar, index) => (
            <div
              key={index}
              className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"
            >
              <Image
                className="aspect-square rounded-full object-cover"
                src={avatar.src}
                alt={avatar.alt}
                height="460"
                width="460"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        ML Pipeline Discussion
      </div>
    </Card>
  )
}

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="aspect-video w-4/5 translate-y-2 p-3">
        <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <Image
              className="aspect-square rounded-full object-cover"
              src={MESCHAC_AVATAR}
              alt="M Irung"
              height="460"
              width="460"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground line-clamp-1 text-sm font-medium">
              Méschac Irung
            </span>

            <span className="text-muted-foreground/75 text-xs">2m</span>
          </div>
        </div>

        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>

        <Signature className="mt-3 ml-8 size-5" />
      </Card>
      <Card className="absolute top-4 right-0 flex aspect-3/5 w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  )
}

const AIAssistantIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="ml-auto w-fit max-w-3/4">
        <p className="border-foreground/5 bg-foreground/5 mb-2 rounded-t-2xl rounded-l-2xl rounded-br border p-4 text-sm">
          Mollitia rerum est quisquam nobis ut cumque, dolore earum a voluptate
          esse. Illo, rerum esse?
        </p>
        <span className="text-muted-foreground block text-right text-xs">
          Now
        </span>
      </div>
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">
          How can I optimize my neural network to reduce inference time while
          maintaining accuracy?
        </p>
      </div>
      <div className="bg-foreground/5 -mx-3 mt-3 -mb-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask AI Assistant</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Globe />
            </Button>
          </div>

          <Button size="icon" className="size-7 rounded-2xl bg-black">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
