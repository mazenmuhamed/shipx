'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  BookmarkIcon,
  ChevronDownIcon,
  ClapperboardIcon,
  CreditCardIcon,
  FlagIcon,
  LayoutDashboardIcon,
  ShoppingBagIcon,
  StoreIcon,
  Users2Icon,
  UsersIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const links = [
  { label: 'Friends', href: '/friends', icon: UsersIcon, new: false },
  { label: 'Groups', href: '/groups', icon: Users2Icon },
  { label: 'Marketplace', href: '/marketplace', icon: StoreIcon },
  { label: 'Reels', href: '/reels', icon: ClapperboardIcon },
  { label: 'Saved', href: '/saved', icon: BookmarkIcon },
  {
    label: 'Start a Business',
    href: '/store',
    icon: ShoppingBagIcon,
    premium: true,
  },
  {
    label: 'Business Dashboard',
    href: '/dashboard',
    icon: LayoutDashboardIcon,
    premium: true,
  },
  { label: 'Pages', href: '/pages', icon: FlagIcon },
  {
    label: 'Manage Subscriptions',
    href: '/subscriptions',
    icon: CreditCardIcon,
  },
]

export function MainSidebarLinks() {
  const [menuLength, setMenuLength] = useState(7)

  return (
    <div className="flex flex-col">
      <Button
        asChild
        variant="ghost"
        size="lg"
        className="w-full justify-baseline gap-4 !px-2 opacity-85 hover:opacity-100"
      >
        <Link href="/ship-ai" className="flex items-center gap-5">
          <Image
            src="/brand/ai-logo.svg"
            alt="Ai Logo"
            width={25}
            height={25}
            className="object-contain"
          />
          <span className="mr-auto text-[15px]">Ship AI</span>
          <Badge variant="premium">New</Badge>
        </Link>
      </Button>
      {links.slice(0, menuLength).map(tab => (
        <Button
          asChild
          key={tab.href}
          variant="ghost"
          size="lg"
          className="w-full justify-baseline gap-4 !px-2 opacity-85 hover:opacity-100"
          disabled={tab.premium}
        >
          <Link
            key={tab.label}
            href={tab.href}
            data-disabled={tab.premium}
            className="flex items-center gap-5 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
          >
            <tab.icon className="size-[23px]" />
            <span className="mr-auto text-[15px]">{tab.label}</span>
            {tab.new && <Badge variant="premium">New</Badge>}
            {tab.premium && <Badge variant="premium">Premium</Badge>}
          </Link>
        </Button>
      ))}
      <Button
        size="lg"
        variant="ghost"
        className="w-full justify-baseline gap-4 !px-1.5 opacity-85 hover:opacity-100"
        onClick={() =>
          setMenuLength(prev => (prev === links.length ? 8 : links.length))
        }
      >
        <div className="flex size-7 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
          <ChevronDownIcon className="text-foreground size-4" />
        </div>
        <span className="text-[15px]">See more</span>
      </Button>
    </div>
  )
}
