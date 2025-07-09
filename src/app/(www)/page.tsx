import type { Metadata } from 'next'

import { LandingPageView } from '@/modules/www/views/landing-page-view'

export const metadata: Metadata = {
  title: 'ShipX - Manage your social & business life in one place',
}

export default function LandingPage() {
  return <LandingPageView />
}
