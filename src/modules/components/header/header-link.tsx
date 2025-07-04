'use client'

import Link from 'next/link'
import { LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

import { ActionTooltip } from '@/components/action-tooltip'

type Props = {
  label: string
  url: string
  icon: React.ElementType<LucideProps>
  isActive: boolean
}

export function HeaderLink({ label, url, isActive, icon: Icon }: Props) {
  return (
    <ActionTooltip tooltip={label} contentClassName="md:hidden" side="right">
      <Link
        href={url}
        className="group focus-visible:border-ring focus-visible:ring-ring/50 w-fit cursor-pointer rounded-full outline-none focus-visible:ring-[3px] md:w-full"
      >
        <div
          className={cn(
            'group-hover:bg-accent group-hover:text-accent-foreground dark:group-hover:bg-accent/50 flex size-12 h-11 items-center justify-center gap-4 rounded-full bg-transparent px-2 md:w-fit md:justify-baseline md:pr-8 md:pl-3',
            isActive
              ? 'font-semibold opacity-100'
              : 'opacity-70 group-hover:opacity-100',
          )}
        >
          <Icon className="size-[22px]" />
          <span className="hidden md:inline-block">{label}</span>
        </div>
      </Link>
    </ActionTooltip>
  )
}
