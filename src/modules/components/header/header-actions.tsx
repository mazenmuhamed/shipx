import { GripIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ActionTooltip } from '@/modules/ui/action-tooltip'

import { UserMenu } from './user-menu'
import { ChatsMenu } from './chats-menu'
import { NotificationMenu } from './notification-menu'

export function HeaderActions() {
  return (
    <div className="flex w-full max-w-80 items-center justify-end gap-2">
      <ActionTooltip tooltip="menu">
        <Button
          disabled
          size="icon"
          variant="ghost"
          className="bg-accent hover:border-border focus:border-border border-border/70 size-10 rounded-full border dark:border-transparent"
        >
          <GripIcon className="size-5" />
        </Button>
      </ActionTooltip>
      <ChatsMenu />
      <NotificationMenu />
      <UserMenu />
    </div>
  )
}
