'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import z from 'zod'

import { trpc } from '@/trpc/client'
import { forgotPasswordSchema } from '../schemas/forgot-password-schema'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { ErrorAlert } from '@/modules/ui/error-alert'

export function ForgotPasswordForm() {
  const [successSentMail, setSuccessSentMail] = useState(false)

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  const {
    mutate: forgotPassword,
    error,
    isPending,
  } = trpc.auth.forgotPassword.useMutation({
    onSuccess: () => {
      setSuccessSentMail(true)
    },
    onError: error => {
      console.error('[FORGOT_PASSWORD_ERR]', error)
      form.setError('root', { message: error.message })
    },
  })

  async function handleSubmit(data: z.infer<typeof forgotPasswordSchema>) {
    forgotPassword(data)
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex h-full flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-12 border-zinc-700/60 bg-zinc-800"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {successSentMail && (
            <ErrorAlert
              status="success"
              description="A reset password link has been sent to your email."
            />
          )}
          {error && <ErrorAlert status="warning" description={error.message} />}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || isPending}
            >
              {isPending && <Loader2 className="animate-spin" />}
              Send link
            </Button>
            <p className="text-muted-foreground mt-3 text-center text-sm">
              Don&lsquo; have an account?{' '}
              <Link href="/signup" className="text-zinc-100 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
