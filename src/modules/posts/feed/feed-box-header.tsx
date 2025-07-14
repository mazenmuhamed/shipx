import { Button } from '@/components/ui/button'
import { UserAvatar } from '@/modules/ui/user-avatar'
import { PostPrivacy } from '@prisma/client'
import {
  EllipsisIcon,
  XIcon,
  EarthIcon,
  UsersIcon,
  LockIcon,
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  avatar: string | null
  userId: string
  privacy: PostPrivacy
  displayName: string
  createdAt: Date
}

export function FeedBoxHeader({
  avatar,
  userId,
  privacy,
  displayName,
  createdAt,
}: Props) {
  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <UserAvatar
          src={avatar}
          alt={displayName}
          id={userId}
          className="size-[38px]"
        />
        <div className="flex flex-col">
          <Link
            href={`/profile/${userId}`}
            className="text-[15px] font-medium hover:underline"
          >
            {displayName}
          </Link>
          <div className="text-muted-foreground flex items-center gap-1">
            <span className="text-xs">
              {new Date(createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </span>
            <span className="text-sm">·</span>
            {privacy === PostPrivacy.PUBLIC && (
              <EarthIcon className="size-[15px]" />
            )}
            {privacy === PostPrivacy.FRIENDS && (
              <UsersIcon className="size-[15px]" />
            )}
            {privacy === PostPrivacy.ONLY_ME && (
              <LockIcon className="size-[14px]" />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
          onClick={() => console.log('Post options clicked')}
        >
          <EllipsisIcon className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
          onClick={() => console.log('Post options clicked')}
        >
          <XIcon className="size-5" />
        </Button>
      </div>
    </div>
  )
}
