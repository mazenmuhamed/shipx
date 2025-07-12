import { cn } from '@/lib/utils'

export function ErrorFallback({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center py-2', className)}>
      <p className="tracking-wide">Something went wrong!</p>
    </div>
  )
}
