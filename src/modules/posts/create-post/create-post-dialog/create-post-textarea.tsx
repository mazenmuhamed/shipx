import { useRef } from 'react'
import { Control, ControllerRenderProps } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

import { cn } from '@/lib/utils'
import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'

import { ScrollArea } from '@/components/ui/scroll-area'
import { EmojiButton } from '@/modules/components/emoji-button'
import { FormControl, FormField, FormItem } from '@/components/ui/form'

import { PostImagesPreview } from './post-images-preview'

type Props = {
  name: string
  value: string
  previewImage: string | null
  control: Control<CreatePostSchema> | undefined
  onEmojiSelect: (emoji: { native: string }) => void
  onRemoveImage: VoidFunction
}

export function CreatePostTextarea({
  name,
  value,
  control,
  previewImage,
  onEmojiSelect,
  onRemoveImage,
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
      <ScrollArea className="flex h-full max-h-[46svh] flex-col px-5 py-0">
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
                  minRows={previewImage ? 1 : 4}
                  placeholder={`What's on your mind, ${name.split(' ')[0]}?`}
                  className={cn(
                    'placeholder:text-secondary-foreground/70 resize-none overflow-hidden bg-transparent outline-none',
                    value.length >= 300 && 'text-sm',
                    previewImage ? 'normal text-[15px]' : 'text-lg',
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div
          className={cn(
            !previewImage ? 'hidden' : '-mb-2 flex items-center justify-end',
          )}
        >
          <EmojiButton
            onEmojiSelect={onEmojiSelect}
            onCloseAutoFocus={() => textareaRef.current?.focus()}
          />
        </div>
        {previewImage && (
          <PostImagesPreview url={previewImage} onRemove={onRemoveImage} />
        )}
      </ScrollArea>
      <div
        className={cn(
          previewImage ? 'hidden' : 'mr-5 flex items-center justify-end',
        )}
      >
        <EmojiButton
          onEmojiSelect={onEmojiSelect}
          onCloseAutoFocus={() => textareaRef.current?.focus()}
        />
      </div>
    </>
  )
}
