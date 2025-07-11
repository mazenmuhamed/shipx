import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="dark:bg-popover flex h-svh items-center justify-center">
      <Loader2 className="size-6 animate-spin" />
    </div>
  )
}
