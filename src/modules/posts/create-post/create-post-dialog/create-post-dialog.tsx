'use client'

import { User } from '@prisma/client'

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
import { CreatePostDialogActions } from './create-post-dialog-actions'
import { CreatePostTextarea } from './create-post-textarea'

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create post</DialogTitle>
          <DialogDescription className="hidden sm:inline-flex"></DialogDescription>
        </DialogHeader>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <UserAvatar
              id={user.id}
              src={user.image}
              alt={user.name}
              className="size-11"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-medium">Mazen Mohamed</span>
              <PostPrivacyButton />
            </div>
          </div>
          <CreatePostTextarea name={user.name} />
          <CreatePostDialogActions />
          <Button disabled className="tex-[15px] rounded-md">
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
