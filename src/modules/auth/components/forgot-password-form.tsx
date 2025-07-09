'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { formSchema, FormSchema } from '../schemas/forgot-password-form-schema'

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
  // const [isPending, setIsPending] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')

  // const router = useRouter()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  })

  async function handleSubmit(data: FormSchema) {
    console.log('Form submitted with data:', data)
  }

  const isPending = form.formState.isSubmitting
  const errorMessage = form.formState.errors?.root?.message || ''

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
