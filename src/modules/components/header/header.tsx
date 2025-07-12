'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Gamepad2Icon,
  HomeIcon,
  MonitorPlayIcon,
  StoreIcon,
  UsersIcon,
} from 'lucide-react'

import { Searchbar } from './searchbar'
import { HeaderLink } from './header-link'
import { HeaderActions } from './header-actions'

const links = [
  { label: 'Home', url: '/home', icon: HomeIcon },
  { label: 'Video', url: '/watch', icon: MonitorPlayIcon },
  { label: 'Marketplace', url: '/marketplace', icon: StoreIcon },
  { label: 'Groups', url: '/groups', icon: UsersIcon },
  { label: 'Games', url: '/games', icon: Gamepad2Icon },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-background dark:bg-popover dark:text-popover-foreground sticky inset-x-0 top-0 z-50 flex h-14 w-full items-center justify-between gap-8 border-b px-4 md:gap-0">
      <div className="flex w-full max-w-96 items-center gap-4">
        <Link href="/home">
          <Image
            src="/brand/logo-light.svg"
            alt="ShipX Logo"
            width={25}
            height={25}
            draggable={false}
            className="min-h-8 min-w-8 select-none"
          />
        </Link>
        <Searchbar />
      </div>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map(link => (
          <HeaderLink
            key={link.url}
            tooltip={link.label}
            url={link.url}
            icon={link.icon}
            isActive={pathname === link.url}
          />
        ))}
      </nav>
      <HeaderActions />
    </header>
  )
}
