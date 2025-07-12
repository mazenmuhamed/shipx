import { useRef, useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import { EmojiButton } from '@/modules/components/emoji-button'

export function CreatePostTextarea({ name }: { name: string }) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <ScrollArea className="p-0">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
        placeholder={`What's on your mind, ${name.split(' ')[0]}?`}
        className="placeholder:text-secondary-foreground/70 w-full resize-none bg-transparent text-lg outline-none"
      />
      <div className="flex items-center justify-end">
        <EmojiButton
          onEmojiSelect={e => setText(prev => prev + e.native)}
          onCloseAutoFocus={() => textareaRef.current?.focus()}
        />
      </div>
    </ScrollArea>
  )
}
