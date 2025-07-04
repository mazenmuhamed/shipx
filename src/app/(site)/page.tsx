import type { Metadata } from 'next'

import { LandingPageView } from './components/views/landing-page-view'

export const metadata: Metadata = {
  title: 'ShipX - Manage your social & business life in one place',
  description:
    'ShipX is a platform that helps you create & manage your social and business life in one place, making it easier to stay opened and connected with your community.',
}

export default async function LandingPage() {
  return <LandingPageView />
}
