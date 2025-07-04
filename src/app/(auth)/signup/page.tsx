import type { Metadata } from 'next'

import { SignupForm } from '@/modules/auth/components/signup-form'

export const metadata: Metadata = {
  title: 'Sign up | ShopX',
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-12">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold">
          Create your free account
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Create your free account to start exploring the world and build your
          business with us. No credit card required.
        </p>
      </div>
      <SignupForm />
    </div>
  )
}
