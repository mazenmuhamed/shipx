import { useRef } from 'react'
import { Control, ControllerRenderProps } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

import { cn } from '@/lib/utils'
import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'

import { ScrollArea } from '@/components/ui/scroll-area'
import { FormControl, FormField, FormItem } from '@/components/ui/form'

import { EmojiButton } from '@/modules/components/emoji-button'

type Props = {
  name: string
  value: string
  control: Control<CreatePostSchema> | undefined
  onEmojiSelect: (emoji: { native: string }) => void
}

export function CreatePostTextarea({
  name,
  control,
  value,
  onEmojiSelect,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  /**
   * Handles the ref for the textarea to ensure it can be focused
   * and to maintain the correct reference for the react-hook-form.
   */
  function handleTextareaRef(
    e: HTMLTextAreaElement | null,
    field: ControllerRenderProps<CreatePostSchema>,
  ) {
    field.ref(e)
    textareaRef.current = e
  }

  return (
    <>
      <ScrollArea className="max-h-[39svh] p-0">
        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextareaAutosize
                  {...field}
                  autoFocus
                  ref={e => handleTextareaRef(e, field)}
                  minRows={4}
                  placeholder={`What's on your mind, ${name.split(' ')[0]}?`}
                  className={cn(
                    'placeholder:text-secondary-foreground/70 w-full resize-none bg-transparent text-lg outline-none',
                    value.length >= 300 && 'text-sm',
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </ScrollArea>
      <div className="flex items-center justify-end">
        <EmojiButton
          onEmojiSelect={onEmojiSelect}
          onCloseAutoFocus={() => textareaRef.current?.focus()}
        />
      </div>
    </>
  )
}
