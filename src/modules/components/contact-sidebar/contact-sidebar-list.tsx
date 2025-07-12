import { EllipsisIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

export function ContactSidebarList() {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-semibold">Contacts</h3>
        <div className="flex items-center gap-2">
          <ActionTooltip tooltip="Search by name or group" side="bottom">
            <Button size="icon" variant="ghost" className="size-8 rounded-full">
              <SearchIcon />
            </Button>
          </ActionTooltip>
          <ActionTooltip tooltip="Options" side="bottom">
            <Button size="icon" variant="ghost" className="size-8 rounded-full">
              <EllipsisIcon />
            </Button>
          </ActionTooltip>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-muted-foreground text-sm">
          <span className="font-semibold">Note:</span> Contacts are not yet
          implemented. This feature will be available in a future update.
        </p>
      </div>
    </div>
  )
}
