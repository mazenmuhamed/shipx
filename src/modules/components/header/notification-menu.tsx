import { useState } from 'react'
import { BellIcon, EllipsisIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

export function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <ActionTooltip tooltip="Notifications">
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'bg-accent hover:border-border focus:border-border border-border/70 size-10 rounded-full border dark:border-transparent',
              isOpen && 'focus:ring-ring ring-foreground ring-2 focus:ring-2',
            )}
          >
            <BellIcon className="size-5" />
          </Button>
        </PopoverTrigger>
      </ActionTooltip>
      <PopoverContent
        align="end"
        alignOffset={-50}
        className="w-[22rem] space-y-2 rounded-2xl pt-3"
        onOpenAutoFocus={e => e.preventDefault()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button size="icon" variant="ghost" className="rounded-full">
            <EllipsisIcon className="size-5" />
          </Button>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">
            You have no new notifications.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
