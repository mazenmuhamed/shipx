import type { Metadata } from 'next'

import { PricingPageView } from '@/modules/www/views/pricing-page-view'

export const metadata: Metadata = {
  title: 'Pricing | ShipX',
  description:
    'Explore our pricing plans and find the perfect fit for your needs. Whether you are an individual or a business, we have a plan that suits you.',
}

export default function PricingPage() {
  return <PricingPageView />
}
