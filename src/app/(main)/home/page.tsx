'use client'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1>Welcome to ShipX</h1>
    </div>
  )
}
