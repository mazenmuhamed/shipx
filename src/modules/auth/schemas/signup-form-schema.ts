import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .nonempty("What's your name?")
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name must be at most 25 characters'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address, please enter a valid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export type FormSchema = z.infer<typeof formSchema>
