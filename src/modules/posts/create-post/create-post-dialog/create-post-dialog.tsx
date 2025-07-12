import { User } from '@prisma/client'
import { IconMoodSmile } from '@tabler/icons-react'
import { ChevronDownIcon, EarthIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { UserAvatar } from '@/modules/ui/user-avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ActionTooltip } from '@/modules/ui/action-tooltip'

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create post</DialogTitle>
          <DialogDescription></DialogDescription>
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
              <Button
                size="sm"
                variant="secondary"
                className="h-7 w-fit rounded-md px-2"
              >
                <EarthIcon className="size-4" />
                <span className="text-xs">Public</span>
                <ChevronDownIcon className="size-3.5" />
              </Button>
            </div>
          </div>
          <ScrollArea className="p-0">
            <textarea
              rows={4}
              placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
              className="placeholder:text-secondary-foreground/70 w-full resize-none bg-transparent text-lg outline-none"
            />
            <div className="flex items-center justify-end">
              <ActionTooltip tooltip="Emoji">
                <Button
                  size="icon"
                  variant="ghost"
                  className="group rounded-full"
                >
                  <IconMoodSmile className="size-6 opacity-80 transition-opacity group-hover:opacity-100" />
                </Button>
              </ActionTooltip>
            </div>
          </ScrollArea>
          <CreatePostDialogActions />
          <Button disabled className="tex-[15px] rounded-md">
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
