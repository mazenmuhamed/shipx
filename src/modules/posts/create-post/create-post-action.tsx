import { ClapperboardIcon, ImagesIcon, RadioIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CreatePostAction() {
  return (
    <div className="flex w-full items-center [&_button]:grow [&_button]:rounded-md">
      <Button variant="ghost" className="gap-3">
        <RadioIcon className="size-[25px] text-rose-500" />
        <span className="opacity-80">Live video</span>
      </Button>
      <Button variant="ghost" className="gap-3">
        <ImagesIcon className="size-[22px] text-green-500" />
        <span className="opacity-80">Photo/Video</span>
      </Button>
      <Button variant="ghost" className="gap-3">
        <ClapperboardIcon className="size-6 text-pink-500" />
        <span className="opacity-80">Reals</span>
      </Button>
    </div>
  )
}
