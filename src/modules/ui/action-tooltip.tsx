'use client'

import {
  TooltipContentProps,
  TooltipTriggerProps,
} from '@radix-ui/react-tooltip'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

type Props = {
  asChild?: boolean
  className?: string
  tooltip: string
  children?: React.ReactNode
  side?: TooltipContentProps['side']
  type?: TooltipTriggerProps['type']
  onClick?: VoidFunction
  disabled?: boolean
  contentClassName?: string
}

export function ActionTooltip({
  type,
  disabled,
  children,
  tooltip,
  asChild,
  onClick,
  className,
  contentClassName,
  side = 'top',
}: Props) {
  return (
    <Tooltip>
      <TooltipTrigger
        type={type}
        asChild={asChild ?? true}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className={cn('font-medium select-none', contentClassName)}
      >
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}
