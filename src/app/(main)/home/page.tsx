'use client'

// import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

// export const metadata: Metadata = {
//   title: 'Home - ShipX',
// }

export default function HomePage() {
  function handleLogout() {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/'
        },
      },
    })
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1>Welcome to ShipX</h1>
      <Button variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}
