import { Comment, Like } from '@prisma/client'
import { IconShare3, IconThumbUp, IconMessageCircle } from '@tabler/icons-react'

type Props = {
  likes: Like[]
  comments: Comment[]
  shares: []
  postId: string
}

export function FeedBoxInteractions({ likes, comments, shares }: Props) {
  return (
    <div className="flex items-center gap-2 px-3">
      <div className="bg-secondary/80 hover:bg-secondary flex cursor-pointer items-center gap-1 rounded-full px-2 py-1">
        <IconThumbUp className="text-muted-foreground size-[18px]" />
        <span className="text-muted-foreground text-[13px]">
          {likes.length > 0 ? likes.length : '0'}
        </span>
      </div>
      <div className="bg-secondary/80 hover:bg-secondary flex cursor-pointer items-center gap-1 rounded-full px-2 py-1">
        <IconMessageCircle className="text-muted-foreground size-[18px]" />
        <span className="text-muted-foreground text-[13px]">
          {comments.length > 0 ? comments.length : '0'}
        </span>
      </div>
      <div className="bg-secondary/80 hover:bg-secondary ml-auto flex cursor-pointer items-center gap-1 rounded-full px-2 py-1">
        <IconShare3 className="text-muted-foreground size-[18px]" />
        <span className="text-muted-foreground text-[13px]">
          {shares.length > 0 ? shares.length : '0'}
        </span>
        <span className="text-muted-foreground text-xs">Shares</span>
      </div>
    </div>
  )
}
