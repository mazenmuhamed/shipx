import type { Metadata } from 'next'

import { HydrateClient, trpc } from '@/trpc/server'
import { checkAuthenticatedUser } from '@/app/actions/user'

import { HomeView } from '@/modules/views/home-view'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  await checkAuthenticatedUser()

  void trpc.user.getUser.prefetch()

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  )
}
