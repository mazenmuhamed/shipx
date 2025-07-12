'use client'

import Link from 'next/link'
import { User } from '@prisma/client'

import { cn } from '@/lib/utils'
import { useBreakPoint } from '@/hooks/use-breakpoint'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UserAvatar } from '@/modules/ui/user-avatar'

import { MainSidebarLinks } from './main-sidebar-links'
import { MainSidebarShortcuts } from './main-sidebar-shortcuts'

export function MainSidebar({ user }: { user: User }) {
  const isTablet = useBreakPoint(1100)

  return (
    <aside
      className={cn(
        'sticky top-14 left-0 h-[calc(100svh-3.5rem)] w-72 flex-col',
        isTablet ? 'hidden' : 'flex',
      )}
    >
      <ScrollArea className="h-full w-full p-2">
        <div className="flex flex-col gap-0.5">
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full justify-baseline gap-3 px-1.5"
          >
            <Link href={`/profile/${user.id}`}>
              <UserAvatar
                src={user.image}
                alt={user.name}
                className="size-8"
                disableNavigation
              />
              <span className="text-base font-medium">{user.name}</span>
            </Link>
          </Button>
          <MainSidebarLinks />
          <hr className="my-2" />
          <MainSidebarShortcuts />
        </div>
      </ScrollArea>
    </aside>
  )
}
