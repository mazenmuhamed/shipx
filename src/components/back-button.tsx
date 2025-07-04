'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { Button } from './ui/button'

import { cn } from '@/lib/utils'

type Props = { href?: string; className?: string; goBack?: boolean }

export function BackButton({ href, className, goBack }: Props) {
  const router = useRouter()

  if (goBack) {
    return (
      <Button
        size="sm"
        variant="dark"
        className={cn(className)}
        onClick={() => router.back()}
      >
        <ArrowLeft className="size-4" />
        <span>Back</span>
      </Button>
    )
  }

  return (
    <Button asChild size="sm" variant="dark" className={cn(className)}>
      <Link href={href ?? '/'} className="flex items-center gap-2">
        <ArrowLeft className="size-4" />
        <span>Back</span>
      </Link>
    </Button>
  )
}
