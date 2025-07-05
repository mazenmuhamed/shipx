import { ScrollArea } from '@/components/ui/scroll-area'

export function Sidebar() {
  return (
    <aside className="sticky top-14 left-0 h-[calc(100svh-3.5rem)] w-[30rem]">
      <ScrollArea className="py-2">Sidebar</ScrollArea>
    </aside>
  )
}
