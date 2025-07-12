import type { Metadata } from 'next'

import { HomeView } from '@/modules/views/home-view'
import { HydrateClient, trpc } from '@/trpc/server'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

export default async function HomePage() {
  void trpc.user.getUser.prefetch()

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  )
}
