import Link from 'next/link'
import Image from 'next/image'

import { Skeleton } from '@/components/ui/skeleton'

import { cn } from '@/lib/utils'

type Props = {
  id?: string
  src: string | null | undefined
  alt: string | null | undefined
  className?: string
  width?: number
  height?: number
  disableNavigation?: boolean
}

export function UserAvatar({
  src,
  alt,
  className,
  id,
  disableNavigation,
}: Props) {
  if (!src || !alt) {
    return <Skeleton className={cn('h-10 w-10 rounded-full', className)} />
  }

  if (disableNavigation) {
    return (
      <div
        className={cn(
          'relative flex h-10 w-10 shrink-0 rounded-full border bg-zinc-100 dark:border-none dark:bg-zinc-200',
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
    )
  }

  if (!disableNavigation && !id) {
    throw new Error('User id is required for navigation')
  }

  return (
    <Link href={`/profile/${id}`} className="size-fit" draggable="false">
      <div
        className={cn(
          'relative flex h-10 w-10 shrink-0 rounded-full border dark:border-none',
          className,
        )}
      >
        <Image
          src={src ?? ''}
          alt={alt ?? ''}
          fill
          className="rounded-full"
          sizes="(max-width: 640px) 100vw, 640px"
          draggable="false"
        />
      </div>
    </Link>
  )
}
