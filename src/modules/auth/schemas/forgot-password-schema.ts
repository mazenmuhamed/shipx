import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z
    .email('Invalid email address, please enter a valid email')
    .nonempty('Email is required'),
})
