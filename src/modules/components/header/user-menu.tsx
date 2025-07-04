import Image from 'next/image'
import { Ellipsis } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

export function UserMenu({ className }: { className?: string }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'size-12 justify-between p-0 md:h-14 md:w-full md:px-6',
        className,
      )}
    >
      <div className="flex items-center md:gap-2">
        <Image
          src="/images/avatar.png"
          alt="User Avatar"
          width={48}
          height={48}
          className="size-8 rounded-full object-cover select-none md:size-auto"
        />
        <div className="hidden flex-col md:flex">
          <span className="text-sm font-semibold">MazenMuhamed</span>
          <span className="text-muted-foreground -ml-1 text-xs">
            @mazenmuhamed
          </span>
        </div>
      </div>
      <Ellipsis className="text-muted-foreground hidden size-4 md:inline-block" />
    </Button>
  )
}
