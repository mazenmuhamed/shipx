'use client'

import { toast } from 'sonner'
import { useState } from 'react'
import { ClientUploadedFileData } from 'uploadthing/types'
import { Control, ControllerRenderProps } from 'react-hook-form'
import {
  ImagesIcon,
  Loader2Icon,
  LucideProps,
  MapPinIcon,
  SmileIcon,
  TagsIcon,
} from 'lucide-react'

import { UploadButton } from '@/lib/uploadthing'
import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'
import { cn, optimizeUploadedImageQuality } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem } from '@/components/ui/form'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

type Porps = {
  control: Control<CreatePostSchema>
}

export function CreatePostDialogActions({ control }: Porps) {
  const [isUploading, setIsUploading] = useState(false)

  /**
   * Handles the image upload process.
   * It optimizes the image quality before uploading.
   */
  async function handleUploadImage(files: File[]) {
    setIsUploading(true)
    try {
      const images = await Promise.all(
        files.map(async file => {
          return await optimizeUploadedImageQuality(file)
        }),
      )
      return images
    } catch (error) {
      console.log('[UPLOAD_IMAGE_ERR]', error)
      toast.error('Image upload failed, please try again.')

      return []
    }
  }

  /**
   * Handles the completion of the upload process.
   * It updates the form field with the uploaded image URL.
   */
  function handleUploadComplete(
    res: ClientUploadedFileData<{ uploadedBy: string }>[],
    field: ControllerRenderProps<CreatePostSchema, 'image'>,
  ) {
    field.onChange(res[0]?.ufsUrl)
    setIsUploading(false)
  }

  return (
    <div className="flex h-14 items-center justify-between rounded-lg border px-4">
      <p className="text-sm font-medium">Add to your post</p>
      <div className="flex items-center gap-1">
        <FormField
          control={control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ActionTooltip
                  asChild={false}
                  type="button"
                  tooltip="Photo/video"
                  disabled={isUploading}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 rounded-full transition outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                >
                  <UploadButton
                    endpoint="imageUploader"
                    onBeforeUploadBegin={handleUploadImage}
                    disabled={isUploading}
                    className="ut-button:size-9 ut-allowed-content:hidden ut-button:rounded-full ut-button:hover:bg-accent ut-button:outline-none ut-button:text-green-600 hover:ut-button:text-green-500"
                    onUploadBegin={() => setIsUploading(true)}
                    onClientUploadComplete={res =>
                      handleUploadComplete(res, field)
                    }
                    onUploadError={(error: Error) => {
                      console.log('[UPLOAD_IMAGE_ERR]', error)
                      toast.error('Upload failed, please try again.')
                    }}
                    content={{
                      button: (
                        <>
                          {isUploading ? (
                            <Loader2Icon className="size-5 animate-spin" />
                          ) : (
                            <ImagesIcon className="size-[23px] cursor-pointer" />
                          )}
                        </>
                      ),
                    }}
                  />
                </ActionTooltip>
              </FormControl>
            </FormItem>
          )}
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
  asChild?: boolean
  icon: React.ElementType<LucideProps>
  tooltip: string
  variants?: Variants
  onClick?: VoidFunction
  className?: string
  disabled?: boolean
}

export function ActionButton({
  icon: Icon,
  asChild,
  tooltip,
  variants = 'green',
  onClick,
  disabled,
  className,
}: ActionButtonProps) {
  return (
    <ActionTooltip tooltip={tooltip}>
      <Button
        asChild={asChild}
        size="icon"
        type="button"
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
