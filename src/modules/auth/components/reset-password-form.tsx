'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import z from 'zod'

import { trpc } from '@/trpc/client'

import { resetPasswordSchema } from '../schemas/reset-password-schema'

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

export function ResetPasswordForm({ token }: { token: string }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  })

  const {
    mutate: resetPassword,
    error,
    isPending,
  } = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      toast.success('Your password has been changed')
      router.replace('/login')
    },
    onError: error => {
      console.error('[RESET_PASSWORD_ERR]', error)
      form.setError('root', { message: error.message })
    },
  })

  async function handleSubmit(data: z.infer<typeof resetPasswordSchema>) {
    resetPassword({ password: data.password, token })
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      className="h-12 border-zinc-700/60 bg-zinc-800"
                      {...field}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => setShowPassword(prev => !prev)}
                      className="text-muted-foreground absolute top-2/4 right-2 -translate-y-2/4 transform"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm password"
                      className="h-12 border-zinc-700/60 bg-zinc-800"
                      {...field}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => setShowConfirmPassword(prev => !prev)}
                      className="text-muted-foreground absolute top-2/4 right-2 -translate-y-2/4 transform"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <ErrorAlert status="warning" description={error.message} />}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || isPending}
            >
              {isPending && <Loader2 className="animate-spin" />}
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
