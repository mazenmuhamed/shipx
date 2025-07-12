import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { auth } from '@/lib/auth'
import { HydrateClient, trpc } from '@/trpc/server'

import { HomeView } from '@/modules/views/home-view'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

// Force dynamic rendering to prevent prerender errors
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/login')
  }

  void trpc.user.getUser.prefetch()

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  )
}
