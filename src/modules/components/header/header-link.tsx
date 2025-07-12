import Link from 'next/link'
import { motion } from 'motion/react'
import { LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { ActionTooltip } from '@/modules/ui/action-tooltip'

type Props = {
  tooltip: string
  url: string
  icon: React.ElementType<LucideProps>
  isActive: boolean
}

export function HeaderLink({ tooltip, url, isActive, icon: Icon }: Props) {
  return (
    <ActionTooltip tooltip={tooltip}>
      <Button
        asChild
        variant="ghost"
        className={cn('group relative h-11 rounded-lg !px-6 lg:!px-8')}
      >
        <Link href={url}>
          <Icon
            className={cn(
              'size-[1.6rem] transition-colors',
              isActive
                ? 'text-primary'
                : 'text-muted-foreground group-hover:text-primary',
            )}
          />
          <span className="sr-only">{tooltip}</span>
          <motion.div
            className="bg-primary absolute inset-x-0 -bottom-1.5 h-[3px] rounded-full"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
      </Button>
    </ActionTooltip>
  )
}
