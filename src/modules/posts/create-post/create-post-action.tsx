import { ClapperboardIcon, ImagesIcon, RadioIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CreatePostAction() {
  return (
    <div className="flex w-full items-center [&_button]:flex-1 [&_button]:rounded-md">
      <Button variant="ghost" className="sm:gap-3">
        <RadioIcon className="text-rose-500 sm:size-[25px]" />
        <span className="text-[15px] font-normal opacity-80">Live video</span>
      </Button>
      <Button variant="ghost" className="sm:gap-3">
        <ImagesIcon className="text-green-500 sm:size-[22px]" />
        <span className="text-[15px] font-normal opacity-80">Photo/video</span>
      </Button>
      <Button variant="ghost" className="sm:gap-3">
        <ClapperboardIcon className="text-pink-500 sm:size-6" />
        <span className="text-[15px] font-normal opacity-80">Reals</span>
      </Button>
    </div>
  )
}
