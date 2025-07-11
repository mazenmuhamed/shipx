'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import z from 'zod'

import { trpc } from '@/trpc/client'
import { createAccountSchema } from '../schemas/signup-schema'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { SocialButton } from './social-button'

import { ErrorAlert } from '@/modules/ui/error-alert'

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [successSentVerification, setSuccessSentVerification] = useState(false)

  const form = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: { name: '', email: '', password: '' },
  })

  const {
    mutate: createAccount,
    error,
    isPending,
  } = trpc.auth.createAccount.useMutation({
    onSuccess: () => {
      setSuccessSentVerification(true)
    },
    onError: error => {
      console.error('[SIGNUP_ERR]', error)
      form.setError('root', { message: error.message })
    },
  })

  function handleSubmit(data: z.infer<typeof createAccountSchema>) {
    createAccount(data)
  }

  const errorMessage = form.formState.errors.root?.message || error?.message

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6">
      <div className="flex w-full flex-col gap-2">
        <SocialButton provider="google" variant="outline" />
        <SocialButton provider="github" variant="outline" />
      </div>
      <div className="flex w-full items-center gap-3">
        <hr className="flex-1 border-zinc-700/60" />
        <span className="font-medium text-zinc-400">or</span>
        <hr className="flex-1 border-zinc-700/60" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex h-full flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-12 border-zinc-700/60 bg-zinc-800"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          {successSentVerification && (
            <ErrorAlert
              status="success"
              description="A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account."
            />
          )}
          {error && <ErrorAlert status="warning" description={errorMessage} />}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || isPending}
            >
              {isPending && <Loader2 className="animate-spin" />}
              Sign up
            </Button>
            <p className="text-muted-foreground mt-3 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-zinc-100 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
