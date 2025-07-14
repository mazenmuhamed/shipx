import { headers } from 'next/headers'
import { GripIcon } from 'lucide-react'

import { auth } from '@/lib/auth'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ActionTooltip } from '@/modules/ui/action-tooltip'

import { UserMenu } from './user-menu'
import { ChatsMenu } from './chats-menu'
import { NotificationMenu } from './notification-menu'

export async function HeaderActions() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <div className="flex w-full max-w-80 items-center justify-end gap-2 2xl:max-w-96">
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
      {!session && <Skeleton className="size-10 rounded-full" />}
      {session && session.user && <UserMenu user={session.user} />}
    </div>
  )
}
