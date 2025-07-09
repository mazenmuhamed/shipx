import type { Metadata } from 'next'

import { ResetPasswordForm } from '@/modules/auth/components/reset-password-form'

export const metadata: Metadata = {
  title: 'Reset password | ShipX',
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-12">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold">
          Reset your password
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Enter your new password below to reset it.
        </p>
      </div>
      <ResetPasswordForm />
    </div>
  )
}
