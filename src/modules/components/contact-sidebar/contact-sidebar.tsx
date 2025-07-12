'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils'
import { useBreakPoint } from '@/hooks/use-breakpoint'

import { ContactSidebarList } from './contact-sidebar-list'
import { ContactSidebarGroups } from './contact-sidebar-groups'

export function ContactSidebar() {
  const isSmallTablet = useBreakPoint(900)
  const isTablet = useBreakPoint(1100)

  return (
    <aside
      className={cn(
        'sticky top-14 left-0 h-[calc(100svh-3.5rem)]',
        isSmallTablet ? 'hidden' : 'inline-flex',
        isTablet ? 'w-96' : 'w-[30rem]',
      )}
    >
      <ScrollArea className="w-full py-3">
        <div className="flex h-full w-full flex-col gap-4">
          <ContactSidebarList />
          <hr />
          <ContactSidebarGroups />
        </div>
      </ScrollArea>
    </aside>
  )
}
