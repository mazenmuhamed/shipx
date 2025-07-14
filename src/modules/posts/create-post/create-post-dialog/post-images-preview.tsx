import Image from 'next/image'
import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

type Props = {
  url: string
  onRemove: VoidFunction
}

export function PostImagesPreview({ url, onRemove }: Props) {
  return (
    <div className="relative mt-4 h-60 w-full overflow-hidden rounded-lg border">
      <Image
        fill
        src={url}
        alt="image"
        className="size-full rounded-lg object-cover"
      />
      <Button
        size="icon"
        type="button"
        variant="secondary"
        className="absolute top-2 right-2 z-10 size-8 rounded-full shadow-none backdrop-blur-3xl"
        onClick={onRemove}
      >
        <XIcon className="size-5" />
      </Button>
    </div>
  )
}
