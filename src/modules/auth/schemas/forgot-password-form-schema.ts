import { z } from 'zod'

export const formSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address, please enter a valid email'),
})

export type FormSchema = z.infer<typeof formSchema>
