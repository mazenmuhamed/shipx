'use client'

import { useState } from 'react'
import {
  ExpandIcon,
  EllipsisIcon,
  SquarePenIcon,
  SearchIcon,
} from 'lucide-react'
import { IconBrandLine } from '@tabler/icons-react'

import { cn } from '@/lib/utils'
import { useBreakPoint } from '@/hooks/use-breakpoint'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

type ChatsFilter = 'all' | 'unread' | 'groups' | 'communities'

const chatsFilters: ChatsFilter[] = ['all', 'unread', 'groups', 'communities']

export function ChatsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<ChatsFilter>('all')

  const isMobile = useBreakPoint()

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <ActionTooltip tooltip="Chats">
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'bg-accent hover:border-border focus:border-border border-border/70 size-10 rounded-full border dark:border-transparent',
              isOpen && 'focus:ring-ring ring-foreground ring-2 focus:ring-2',
            )}
          >
            <IconBrandLine className="size-5" />
          </Button>
        </PopoverTrigger>
      </ActionTooltip>
      <PopoverContent
        align="end"
        alignOffset={isMobile ? -130 : -98}
        className="flex w-[22rem] flex-col gap-2 rounded-2xl pt-3"
        onOpenAutoFocus={e => e.preventDefault()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chats</h2>
          <div className="text-muted-foreground flex items-center gap-0.5">
            <ActionTooltip tooltip="Options" side="bottom">
              <Button size="icon" variant="ghost" className="rounded-full">
                <EllipsisIcon className="size-5" />
              </Button>
            </ActionTooltip>
            <ActionTooltip tooltip="See all in Messenger" side="bottom">
              <Button size="icon" variant="ghost" className="rounded-full">
                <ExpandIcon className="size-[17.5px]" />
              </Button>
            </ActionTooltip>
            <ActionTooltip tooltip="New Chat" side="bottom">
              <Button size="icon" variant="ghost" className="rounded-full">
                <SquarePenIcon className="size-[19px]" />
              </Button>
            </ActionTooltip>
          </div>
        </div>
        <ChatsMenuSearch />
        <div className="mt-1 flex items-center gap-2">
          {chatsFilters.map(filter => (
            <ChatsMenuTabs
              key={filter}
              label={filter}
              isActive={activeTab === filter}
              onChange={setActiveTab}
            />
          ))}
        </div>
        <div className="flex min-h-20 flex-col items-center justify-center">
          <p className="text-muted-foreground text-center text-sm">
            There is no chat history yet.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}

type ChatsMenuTabProps = {
  /**
   * The label for the tab, which should match one of the ChatsFilter types.
   * `all`, `unread`, `groups`, or `communities`.
   */
  label: ChatsFilter
  /**
   * controls whether the tab is active or not.
   */
  isActive: boolean
  /**
   * Callback function to handle tab changes.
   * It receives the selected `ChatsFilter` type as an argument.
   */
  onChange: (tab: ChatsFilter) => void
}

/**
 * Controls the individual tabs within the Chats menu
 * to filter chats based on the selected criteria.
 */
function ChatsMenuTabs({ label, isActive, onChange }: ChatsMenuTabProps) {
  return (
    <Button
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={() => onChange(label as ChatsFilter)}
      className="h-9 rounded-full font-normal"
    >
      {label.replace(/^\w/, c => c.toUpperCase())}
    </Button>
  )
}

function ChatsMenuSearch() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="relative flex items-center gap-2">
      <SearchIcon className="text-muted-foreground absolute inset-y-2/4 left-3.5 size-4 -translate-y-2/4" />
      <Input
        placeholder="Search in Chats"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="h-9 flex-1 rounded-full pl-9"
      />
    </div>
  )
}
