import type { Metadata } from 'next'

import { HomeView } from '@/modules/views/home-view'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

export default function HomePage() {
  return <HomeView />
}
