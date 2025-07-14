import { IconMessageCircle, IconShare3, IconThumbUp } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

export function FeedBoxActions() {
  return (
    <div className="[&_button]:text-muted-foreground flex items-center [&_button]:flex-1">
      <Button size="xs" variant="ghost">
        <IconThumbUp className="size-5" />
        Like
      </Button>
      <Button size="xs" variant="ghost">
        <IconMessageCircle className="size-[18px]" />
        Comments
      </Button>
      <Button size="xs" variant="ghost">
        <IconShare3 className="size-[18px]" />
        Share
      </Button>
    </div>
  )
}
