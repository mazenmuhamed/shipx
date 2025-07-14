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
import { forwardRef } from 'react'

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

export const ActionTooltip = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type,
      disabled,
      children,
      tooltip,
      asChild,
      onClick,
      className,
      contentClassName,
      side = 'top',
    },
    ref,
  ) => {
    return (
      <Tooltip>
        <TooltipTrigger
          ref={ref}
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
  },
)

ActionTooltip.displayName = 'ActionTooltip'
