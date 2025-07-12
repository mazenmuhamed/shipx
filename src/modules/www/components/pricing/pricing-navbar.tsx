'use client'

import Link from 'next/link'
import Image from 'next/image'
import { User } from 'better-auth'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { MenuButton } from './menu-button'

export function PricingNavbar({ user }: { user: User | undefined }) {
  return (
    <div className="bg-background/80 dark:bg-popover/80 sticky top-0 z-50 flex w-full items-center justify-between px-5 py-3 backdrop-blur-md sm:px-10">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="brand/logo-light.svg"
            alt="ShipX Logo"
            width={32}
            height={32}
            className="object-contain select-none"
          />
        </Link>
        <nav className="hidden items-center gap-5 sm:flex">
          <NavbarLink href="/pricing" label="Pricing" />
          <NavbarLink href="/marketplace" label="Marketplace" notReady={true} />
        </nav>
      </div>
      <div className="flex items-center gap-6">
        {user && (
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/home"
              className="font-medium transition hover:opacity-80"
            >
              Home
            </Link>
            <Button disabled className="h-10 text-base">
              My Dashboard
            </Button>
          </div>
        )}
        {!user && (
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
        )}
        <MenuButton user={user} />
      </div>
    </div>
  )
}

type NavbarLinkProps = { href: string; label: string; notReady?: boolean }

function NavbarLink({ href, label, notReady }: NavbarLinkProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2">
      <Link
        href={href}
        data-disabled={notReady}
        className={cn(
          'text-[15px] opacity-80 transition hover:opacity-100',
          pathname === href && 'font-medium opacity-100',
          notReady && 'hidden',
        )}
      >
        {label}
      </Link>
      {notReady && (
        <>
          <span className="pointer-events-none text-[15px] opacity-60">
            {label}
          </span>
          <Badge className="text-[10px] select-none" variant="secondary">
            Coming Soon
          </Badge>
        </>
      )}
    </div>
  )
}
