'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  Users2Icon,
  VerifiedIcon,
  User2Icon,
  SettingsIcon,
  NotebookPen,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ActionTooltip } from '@/components/action-tooltip'

import { UserMenu } from './user-menu'
import { HeaderLink } from './header-link'

const links = [
  { label: 'Home', url: '/home', icon: HomeIcon },
  { label: 'Explore', url: '/explore', icon: SearchIcon },
  { label: 'Notifications', url: '/notifications', icon: BellIcon },
  { label: 'Messages', url: '/messages', icon: MailIcon },
  { label: 'Bookmarks', url: '/Bookmarks', icon: BookmarkIcon },
  { label: 'Communties', url: '/mommunties', icon: Users2Icon },
  { label: 'Premium', url: '/premium', icon: VerifiedIcon },
  { label: 'Profile', url: '/profile', icon: User2Icon },
  { label: 'Settings', url: '/settings', icon: SettingsIcon },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 w-fit md:flex-1/12 xl:flex-1/6">
      <ScrollArea>
        <div className="flex h-screen max-w-full flex-col items-center gap-2 px-2 py-2 md:items-baseline">
          <Button variant="ghost" size="icon" className="size-11">
            <Image
              src="/icons/logo.svg"
              alt="ShipX Logo"
              width={45}
              height={45}
              draggable={false}
              className="select-none dark:invert"
            />
          </Button>
          <nav className="flex flex-col">
            {links.map(link => (
              <HeaderLink
                key={link.url}
                label={link.label}
                url={link.url}
                icon={link.icon}
                isActive={pathname === link.url}
              />
            ))}
          </nav>
          <ActionTooltip
            tooltip="Create a new post"
            contentClassName="md:hidden"
            side="right"
          >
            <Button className="my-2 size-11 max-w-full md:my-3 md:w-full">
              <span className="hidden md:inline-block">Post</span>
              <NotebookPen className="size-5 md:hidden rtl:rotate-180" />
              <span className="sr-only">Create a new post</span>
            </Button>
          </ActionTooltip>
          <UserMenu className="mt-auto" />
        </div>
      </ScrollArea>
    </header>
  )
}
