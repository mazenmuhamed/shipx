'use client'

import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from 'lucide-react'

import { ActionTooltip } from '@/modules/ui/action-tooltip'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function Searchbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <ActionTooltip
        asChild={false}
        tooltip="Search"
        className="w-fit xl:w-full xl:max-w-72"
        contentClassName="inline-block xl:hidden"
      >
        <div
          className="bg-accent border-border/70 flex size-10 cursor-pointer items-center justify-center gap-4 rounded-full border xl:w-full xl:max-w-full xl:cursor-text xl:justify-between xl:px-4 xl:py-2.5 dark:border-none"
          onClick={() => setOpen(true)}
        >
          <div className="text-muted-foreground hidden items-center gap-2 xl:flex">
            <SearchIcon className="size-4" />
            <span className="text-sm select-none">Search on ShipX</span>
          </div>
          <kbd className="bg-muted text-muted-foreground pointer-events-none hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none xl:inline-flex">
            <span className="text-xs">⌘</span>J
          </kbd>
          <SearchIcon className="size-5 xl:hidden" />
        </div>
      </ActionTooltip>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
