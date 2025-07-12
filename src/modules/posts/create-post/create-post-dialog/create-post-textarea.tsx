import { useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { cn } from '@/lib/utils'

import { ScrollArea } from '@/components/ui/scroll-area'

import { EmojiButton } from '@/modules/components/emoji-button'

export function CreatePostTextarea({ name }: { name: string }) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <>
      <ScrollArea className="max-h-[39svh] p-0">
        <TextareaAutosize
          ref={textareaRef}
          minRows={4}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={`What's on your mind, ${name.split(' ')[0]}?`}
          className={cn(
            'placeholder:text-secondary-foreground/70 w-full resize-none bg-transparent text-lg outline-none',
            text.length >= 300 && 'text-sm',
          )}
        />
      </ScrollArea>
      <div className="flex items-center justify-end">
        <EmojiButton
          onEmojiSelect={e => setText(prev => prev + e.native)}
          onCloseAutoFocus={() => textareaRef.current?.focus()}
        />
      </div>
    </>
  )
}
