import type { Metadata } from 'next'

import { ContactSidebar } from '@/modules/components/contact-sidebar'
import { Sidebar } from '@/modules/components/sidebar'

export const metadata: Metadata = {
  title: 'Home - ShipX',
}

export default function HomePage() {
  return (
    <div className="flex gap-4 px-2">
      <Sidebar />
      <div className="min-h-full w-full">
        <div className="mx-auto w-3/4 pt-2">Welcome to ShipX</div>
      </div>
      <ContactSidebar />
    </div>
  )
}
