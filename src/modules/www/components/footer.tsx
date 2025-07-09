import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const links = ['Explore', 'Glossary', 'Pricing', 'Changelog', 'Blog']

const sublinks = ['Contact', 'Help center', 'Careers', 'Github', 'LinkedIn']

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'text-background bg-foreground dark:text-foreground fixed inset-x-0 bottom-0 h-[34rem] sm:h-[30rem] dark:bg-zinc-950',
        className,
      )}
    >
      <div className="container mx-auto flex h-full max-w-7xl flex-col gap-6 px-8 pt-38 pb-8 sm:justify-between sm:gap-0 sm:pt-24 md:flex-row xl:px-0">
        <div className="flex h-fit flex-col gap-4 sm:h-full">
          <Image
            src="brand/logo-dark.svg"
            alt="ShipX"
            width={90}
            height={90}
            className="size-9 select-none"
          />
          <p className="text-zinc-400">
            Platform to manage your social & business life
          </p>
          <p className="text-muted-foreground mt-auto hidden text-sm md:inline-block">
            &copy; ShipX {new Date().getFullYear()} . All rights reserved.
          </p>
        </div>
        <div className="grid h-full grid-cols-2 gap-20 md:pr-12">
          <div className="flex flex-col gap-3">
            {links.map(link => (
              <Link
                key={link}
                href="/"
                className="w-fit font-medium transition hover:opacity-80"
              >
                {link}
              </Link>
            ))}
            <p className="text-muted-foreground mt-auto text-sm">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {sublinks.map(link => (
              <Link
                key={link}
                href="/"
                className="w-fit font-medium transition hover:opacity-80"
              >
                {link}
              </Link>
            ))}
            <p className="text-muted-foreground mt-auto text-sm">Terms</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-3 text-center text-xs md:hidden">
          &copy; ShipX {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
