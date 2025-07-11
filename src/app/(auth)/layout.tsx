import type { Metadata } from 'next'
import Image from 'next/image'

import { BackButton } from '@/modules/ui/back-button'

export const metadata: Metadata = {
  title: 'ShipX',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="dark bg-popover text-popover-foreground flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-20 md:gap-10 2xl:gap-12">
      <BackButton className="fixed top-5 left-5" />
      <Image
        src="brand/logo-light.svg"
        alt="ShipX Logo"
        width={100}
        height={100}
        className="size-8 select-none md:size-11 lg:size-14"
      />
      {children}
    </main>
  )
}
