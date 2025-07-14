'use client'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useTheme } from 'next-themes'
import { IconMoodSmile } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { ActionTooltip } from '../ui/action-tooltip'
import { cn } from '@/lib/utils'

type Props = {
  onEmojiSelect: (emoji: { native: string }) => void
  onCloseAutoFocus?: (event: Event) => void
  className?: string
}

export function EmojiButton({
  onEmojiSelect,
  onCloseAutoFocus,
  className,
}: Props) {
  const { theme } = useTheme()

  return (
    <Popover modal={true}>
      <ActionTooltip tooltip="Emoji">
        <PopoverTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className={cn('group rounded-full [&_svg]:!size-6', className)}
          >
            <IconMoodSmile className="opacity-80 transition-opacity group-hover:opacity-100" />
          </Button>
        </PopoverTrigger>
      </ActionTooltip>
      <PopoverContent
        side="top"
        align="end"
        className="max-h-72 w-auto overflow-y-auto rounded-2xl p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onCloseAutoFocus={e => {
          e.preventDefault()
          onCloseAutoFocus?.(e) // Focus the textarea or input after closing the emoji picker
        }}
      >
        <Picker
          data={data}
          onEmojiSelect={onEmojiSelect}
          previewPosition="none"
          theme={theme}
          searchPosition="none"
          skinTonePosition="none"
          navPosition="bottom"
          style={{ maxHeight: '5rem', minHeight: '15rem' }}
        />
      </PopoverContent>
    </Popover>
  )
}
