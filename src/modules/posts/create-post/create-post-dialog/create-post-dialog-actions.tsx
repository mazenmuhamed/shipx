import { toast } from 'sonner'
import { Control } from 'react-hook-form'
import {
  TagsIcon,
  SmileIcon,
  ImagesIcon,
  MapPinIcon,
  LucideProps,
  Loader2Icon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { UploadButton } from '@/lib/uploadthing'
import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem } from '@/components/ui/form'

import { ActionTooltip } from '@/modules/ui/action-tooltip'
import { useUploadMedia } from '@/hooks/use-upload-media'

type Porps = {
  control: Control<CreatePostSchema>
}

export function CreatePostDialogActions({ control }: Porps) {
  const {
    isUploading,
    handleUploadBegin,
    handleUploadImage,
    handleUploadComplete,
  } = useUploadMedia()

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
                  type="button"
                  asChild={false}
                  tooltip="Photo/video"
                  disabled={isUploading}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 rounded-full transition outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                >
                  <UploadButton
                    endpoint="imageUploader"
                    disabled={isUploading}
                    onUploadBegin={handleUploadBegin}
                    onBeforeUploadBegin={handleUploadImage}
                    className="ut-button:size-9 ut-allowed-content:hidden ut-button:rounded-full ut-button:hover:bg-accent ut-button:outline-none ut-button:text-green-600 hover:ut-button:text-green-500"
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
