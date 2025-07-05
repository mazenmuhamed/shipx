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
    <header className="bg-muted sticky inset-x-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b px-4">
      <div className="flex flex-1/3 items-center gap-1">
        <Link href="/home">
          <Image
            src="/logos/logo.svg"
            alt="ShipX Logo"
            width={45}
            height={45}
            draggable={false}
            className="select-none dark:invert"
          />
        </Link>
        <Searchbar />
      </div>
      <nav className="hidden grow items-center gap-1 md:flex">
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
