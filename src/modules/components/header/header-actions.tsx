import { BellIcon, GripIcon, MessagesSquareIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ActionTooltip } from '@/components/action-tooltip'

import { UserMenu } from './user-menu'

export function HeaderActions() {
  return (
    <div className="flex flex-1/3 items-center justify-end gap-2">
      <ActionTooltip tooltip="menu">
        <Button
          variant="ghost"
          size="icon"
          className="!bg-background/70 hover:border-border focus:border-border size-10 rounded-full border border-transparent"
        >
          <GripIcon className="size-5" />
        </Button>
      </ActionTooltip>
      <ActionTooltip tooltip="Messges">
        <Button
          variant="ghost"
          size="icon"
          className="!bg-background/70 hover:border-border focus:border-border size-10 rounded-full border border-transparent"
        >
          <MessagesSquareIcon className="size-5" />
        </Button>
      </ActionTooltip>
      <ActionTooltip tooltip="Notifications">
        <Button
          variant="ghost"
          size="icon"
          className="!bg-background/70 hover:border-border focus:border-border size-10 rounded-full border border-transparent"
        >
          <BellIcon className="size-5" />
        </Button>
      </ActionTooltip>
      <UserMenu />
    </div>
  )
}
