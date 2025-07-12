import { Button } from '@/components/ui/button'

export function MainSidebarShortcuts() {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-medium">Your shortcuts</h3>
        <Button size="sm" variant="secondary" className="h-8">
          Edit
        </Button>
      </div>
      <div className="flex flex-col">
        <p className="text-muted-foreground text-sm">
          <span className="font-medium">Note:</span> Shortcuts are not yet
          implemented. This feature will be available in a future update.
        </p>
      </div>
    </div>
  )
}
