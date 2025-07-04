import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex h-svh items-center justify-center">
      <Image
        src="/icons/logo.svg"
        alt="ShipX Logo"
        width={140}
        height={140}
        draggable={false}
        className="select-none dark:invert"
      />
    </div>
  )
}
