import Link from 'next/link'
import {
  ArrowRight,
  BellIcon,
  Share2Icon,
  CalendarIcon,
  FileTextIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { PlatformsAnimatedBeam } from './platforms-animated-beam'
import { NotificationAnimatedList } from './notification-animated-list'

import { Marquee } from '@/modules/animations/marquee'
import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'
import { BentoCard, BentoGrid } from '@/modules/animations/bento-grid'

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
]

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description: 'Get notified when something happens.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <NotificationAnimatedList className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Integrations',
    description: 'Supports 100+ integrations and counting.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <PlatformsAnimatedBeam className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Learn more',
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
]

const delay = 0.2

export function MartketplaceFeaturesSection() {
  return (
    <section className="flex w-full flex-col gap-12">
      <div className="flex flex-col gap-4">
        <TextAnimate
          as="h2"
          className="text-center text-4xl font-bold"
          delay={0.1}
          once
        >
          Marketplace Features
        </TextAnimate>
        <TextAnimate
          as="p"
          className="text-muted-foreground text-center text-sm"
          delay={0.3}
          once
        >
          Discover the features that make our marketplace unique and powerful.
        </TextAnimate>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      <BlurFade
        direction="up"
        className="mx-auto mt-8 flex flex-col items-center gap-8"
        delay={delay + 0.5}
      >
        <TextAnimate
          as="h3"
          className="text-center text-2xl font-semibold"
          delay={0.5}
          once
        >
          Join our marketplace and start exploring today!
        </TextAnimate>
        <div className="flex items-center gap-2">
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
        </div>
      </BlurFade>
    </section>
  )
}
