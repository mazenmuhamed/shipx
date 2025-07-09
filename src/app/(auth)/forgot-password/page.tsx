import type { Metadata } from 'next'

import { ForgotPasswordForm } from '@/modules/auth/components/forgot-password-form'

export const metadata: Metadata = {
  title: 'Forgot password | ShipX',
}

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-12">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold">
          Forgot your password?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
      </div>
      <ForgotPasswordForm />
    </div>
  )
}
