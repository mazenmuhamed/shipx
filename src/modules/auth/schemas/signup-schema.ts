import { z } from 'zod'

export const createAccountSchema = z.object({
  name: z
    .string()
    .nonempty("What's your name?")
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name must be at most 25 characters'),
  email: z
    .email('Invalid email address, please enter a valid email')
    .nonempty('Email is required'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})
