'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { MenuButton } from './menu-button'

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/marketplace', label: 'Marketplace' },
]

export function PricingNavbar() {
  const pathname = usePathname()

  return (
    <div className="bg-background/80 sticky top-0 z-50 flex w-full items-center justify-between px-5 py-3 backdrop-blur-md sm:px-10">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="logos/logo.svg"
            alt="ShipX Logo"
            width={47}
            height={47}
            className="object-contain select-none dark:invert"
          />
        </Link>
        <nav className="hidden items-center gap-5 sm:flex">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[15px] opacity-80 transition hover:opacity-100',
                pathname === link.href && 'font-medium opacity-100',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="font-medium transition hover:opacity-80"
          >
            Log in
          </Link>

          <Button asChild className="h-10 text-base">
            <Link href="/signup">Create for account</Link>
          </Button>
        </div>
        <MenuButton />
      </div>
    </div>
  )
}
