import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = { className?: string }

export function LoadingIndicator({ className }: Props) {
  return (
    <div className={cn('flex items-center justify-center py-2', className)}>
      <Loader2 className="size-5 animate-spin text-sky-500" />
    </div>
  )
}
