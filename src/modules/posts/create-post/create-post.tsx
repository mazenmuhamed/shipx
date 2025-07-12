'use client'

import { User } from '@prisma/client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { UserAvatar } from '@/modules/ui/user-avatar'

import { CreatePostAction } from './create-post-action'
import { CreatePostDialog } from './create-post-dialog'

export function CreatePost({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="box flex w-full flex-col rounded-2xl px-4 pt-4 pb-3 shadow">
      <div className="flex w-full items-center gap-2">
        <UserAvatar src={user.image} alt={user.name} id={user.id} />
        <Button
          size="sm"
          variant="secondary"
          className="h-10 grow cursor-pointer justify-baseline rounded-full font-normal"
          onClick={() => setIsOpen(true)}
        >
          <span className="font-medium opacity-80">
            What&apos;s on your mind, {user.name.split(' ')[0]}?
          </span>
        </Button>
        <CreatePostDialog user={user} open={isOpen} onOpenChange={setIsOpen} />
      </div>
      <hr className="mt-3 mb-2" />
      <CreatePostAction />
    </div>
  )
}
