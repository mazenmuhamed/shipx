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

type Props = {
  onEmojiSelect: (emoji: { native: string }) => void
  onCloseAutoFocus?: (event: Event) => void
}

export function EmojiButton({ onEmojiSelect, onCloseAutoFocus }: Props) {
  const { theme } = useTheme()

  return (
    <Popover modal={true}>
      <ActionTooltip tooltip="Emoji">
        <PopoverTrigger asChild>
          <Button size="icon" variant="ghost" className="group rounded-full">
            <IconMoodSmile className="size-6 opacity-80 transition-opacity group-hover:opacity-100" />
          </Button>
        </PopoverTrigger>
      </ActionTooltip>
      <PopoverContent
        side="top"
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
          style={{ maxHeight: '5rem', minHeight: '15rem' }}
        />
      </PopoverContent>
    </Popover>
  )
}
