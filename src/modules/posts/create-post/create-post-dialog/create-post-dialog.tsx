'use client'

import { User } from '@prisma/client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { trpc } from '@/trpc/client'
import {
  createPostSchema,
  CreatePostSchema,
} from '@/modules/posts/schema/create-post-schema'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { UserAvatar } from '@/modules/ui/user-avatar'

import { PostPrivacyButton } from './post-privacy-button'
import { CreatePostTextarea } from './create-post-textarea'
import { CreatePostDialogActions } from './create-post-dialog-actions'

type Props = {
  user: User
  /**
   * Whether the dialog is open or not.
   */
  open: boolean
  /**
   * Callback function to handle the open state change.
   */
  onOpenChange: (open: boolean) => void
}

export function CreatePostDialog({ user, open, onOpenChange }: Props) {
  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: { content: '', image: null, privacy: 'PUBLIC' },
  })

  const router = useRouter()
  const utils = trpc.useUtils()

  const { mutate: createPost, isPending } = trpc.post.createPost.useMutation({
    onSuccess: () => {
      form.reset()
      router.refresh()
      onOpenChange(false)
      utils.post.getPosts.invalidate()
    },
    onError: error => {
      console.error('[CREATE_POST_ERR]', error)
      toast.error('Something went wrong.')
    },
  })

  /**
   * Handles the form submission to create a post.
   * It uses the `createPost` mutation to send the data to the server.
   */
  function handleSubmit(data: CreatePostSchema) {
    createPost(data)
  }

  /**
   * Handles the emoji selection and appends it to the content field.
   */
  function handleEmojiSelect(emoji: { native: string }) {
    form.setValue('content', form.getValues('content') + emoji.native)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!px-0">
        <DialogHeader className="px-3">
          <DialogTitle className="text-center">Create post</DialogTitle>
          <DialogDescription className="hidden sm:inline-flex"></DialogDescription>
        </DialogHeader>
        <hr />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 px-5">
              <UserAvatar
                id={user.id}
                src={user.image}
                alt={user.name}
                className="size-11"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-medium">Mazen Mohamed</span>
                <PostPrivacyButton control={form.control} />
              </div>
            </div>
            <CreatePostTextarea
              name={user.name}
              control={form.control}
              previewImage={form.watch('image')}
              value={form.watch('content')}
              onEmojiSelect={handleEmojiSelect}
              onRemoveImage={() => form.setValue('image', null)}
            />
            <div className="flex flex-col gap-4 px-5">
              <CreatePostDialogActions control={form.control} />
              <Button
                type="submit"
                disabled={!form.formState.isDirty || isPending}
                className="tex-[15px] rounded-md"
              >
                {isPending && <Loader2Icon className="animate-spin" />}
                Post
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
