import Image from 'next/image'

import { Post } from '@/types'

import { FeedBoxHeader } from './feed-box-header'
import { FeedBoxActions } from './feed-box-actions'
import { FeedBoxInteractions } from './feed-box-interactions'
import { cn } from '@/lib/utils'

type Props = { post: Post }

export function FeedBox({ post }: Props) {
  return (
    <div
      key={post.id}
      className="bg-background text-foreground flex w-full flex-col gap-2 rounded-2xl border pt-3 shadow"
    >
      <FeedBoxHeader
        avatar={post.user.image}
        userId={post.user.id}
        privacy={post.privacy}
        displayName={post.user.name}
        createdAt={post.createdAt}
      />
      <p
        className={cn(
          'px-3',
          post.content && post.content.length > 100 ? 'text-sm' : 'text-base',
          post.image ? 'text-sm' : 'text-base',
        )}
      >
        {post.content}
      </p>
      {post.image && (
        <div className="relative aspect-video w-full">
          <Image
            fill
            src={post.image}
            alt="Post's image"
            className="size-auto object-cover"
          />
        </div>
      )}
      <FeedBoxInteractions
        likes={post.likes}
        comments={post.comments}
        shares={[]} // TODO: Implement shares in the future
        postId={post.id}
      />
      <div className="flex flex-col px-3 pb-1.5">
        <hr className="w-full px-3 pt-1.5" />
        <FeedBoxActions />
      </div>
    </div>
  )
}
