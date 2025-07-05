import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { ActionTooltip } from '@/components/action-tooltip'

export function UserMenu({ className }: { className?: string }) {
  return (
    <ActionTooltip tooltip="Account">
      <Avatar
        className={cn(
          'size-10 cursor-pointer bg-zinc-100 dark:bg-zinc-200',
          className,
        )}
      >
        <AvatarFallback>
          <Skeleton className="size-full rounded-full object-contain" />
        </AvatarFallback>
        <AvatarImage src="/images/avatar.png" alt="User Avatar" className="" />
      </Avatar>
    </ActionTooltip>
  )
}
