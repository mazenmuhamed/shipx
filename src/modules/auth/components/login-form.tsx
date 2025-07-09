'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Eye, EyeOff } from 'lucide-react'

import { formSchema, FormSchema } from '../schemas/login-form-schema'

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

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  // const [isPending, setIsPending] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')

  // const router = useRouter()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  })

  async function handleSubmit(data: FormSchema) {
    console.log('Form submitted with data:', data)
  }

  const isPending = form.formState.isSubmitting
  const errorMessage = form.formState.errors?.root?.message || ''

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
          {errorMessage && (
            <ErrorAlert status="warning" description={errorMessage} />
          )}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || isPending}
            >
              {isPending && <Loader2 className="animate-spin" />}
              Log in
            </Button>
            <Button
              asChild
              size="sm"
              variant="link"
              className="text-muted-foreground hover:text-primary-foreground w-fit self-center"
            >
              <Link href="/forgot-password">Forgot your password?</Link>
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
