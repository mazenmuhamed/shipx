import type { Metadata } from 'next'

import { LoginForm } from '@/modules/auth/components/login-form'

export const metadata: Metadata = {
  title: 'Log in | ShipX',
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-12">
      <h1 className="text-center text-4xl font-semibold">Welcome back</h1>
      <LoginForm />
    </div>
  )
}
