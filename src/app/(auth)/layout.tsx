import type { Metadata } from 'next'
import Image from 'next/image'

import { BackButton } from '@/components/back-button'

export const metadata: Metadata = {
  title: 'ShipX',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="dark bg-background text-foreground flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-12 md:gap-10 2xl:gap-12">
      <BackButton className="fixed top-5 left-5" />
      <Image
        src="logos/logo.svg"
        alt="ShipX Logo"
        width={100}
        height={100}
        className="select-none dark:invert"
      />
      {children}
    </main>
  )
}
