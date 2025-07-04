import Link from 'next/link'
import Image from 'next/image'

import { Skeleton } from '@/components/ui/skeleton'

import { cn } from '@/lib/utils'

type Props = {
  id?: string
  src?: string | null
  alt?: string | null
  className?: string
  width?: number
  height?: number
}

export function UserAvatar({ src, alt, className, id }: Props) {
  if (!src || !alt) {
    return <Skeleton className={cn('h-10 w-10 rounded-full', className)} />
  }

  return (
    <Link href={id ? `/profile/${id}` : '/profile'} className="size-fit">
      <div
        className={cn(
          'relative flex h-10 w-10 shrink-0 rounded-full',
          className,
        )}
      >
        <Image
          src={src ?? ''}
          alt={alt ?? ''}
          fill
          className="rounded-full"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
    </Link>
  )
}
