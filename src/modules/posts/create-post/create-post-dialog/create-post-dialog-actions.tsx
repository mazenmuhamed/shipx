'use client'

import {
  ImagesIcon,
  LucideProps,
  MapPinIcon,
  SmileIcon,
  TagsIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

export function CreatePostDialogActions() {
  return (
    <div className="flex h-14 items-center justify-between rounded-lg border px-4">
      <p className="text-sm font-medium">Add to your post</p>
      <div className="flex items-center gap-1">
        <ActionButton
          tooltip="Photo/video"
          variants="green"
          icon={ImagesIcon}
        />
        <ActionButton
          disabled
          tooltip="Tag people"
          variants="blue"
          className="size-[26px]"
          icon={TagsIcon}
        />
        <ActionButton
          disabled
          tooltip="Feeling/activity"
          variants="yellow"
          icon={SmileIcon}
        />
        <ActionButton
          disabled
          tooltip="Check in"
          variants="orange"
          icon={MapPinIcon}
        />
      </div>
    </div>
  )
}

type Variants = 'green' | 'blue' | 'orange' | 'yellow'

type ActionButtonProps = {
  icon: React.ElementType<LucideProps>
  tooltip: string
  variants?: Variants
  onClick?: VoidFunction
  className?: string
  disabled?: boolean
}

export function ActionButton({
  icon: Icon,
  tooltip,
  variants = 'green',
  onClick,
  disabled,
  className,
}: ActionButtonProps) {
  return (
    <ActionTooltip tooltip={tooltip}>
      <Button
        size="icon"
        variant="ghost"
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'group rounded-full',
          variants === 'blue' && 'text-primary hover:text-primary/80',
          variants === 'green' && 'text-green-600 hover:text-green-500',
          variants === 'yellow' && 'text-yellow-600 hover:text-yellow-500',
          variants === 'orange' && 'text-orange-600 hover:text-orange-500',
        )}
      >
        <Icon className={cn('size-6', className)} />
      </Button>
    </ActionTooltip>
  )
}
