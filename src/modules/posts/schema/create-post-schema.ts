import { PostPrivacy } from '@prisma/client'
import z from 'zod'

export const createPostSchema = z.object({
  content: z.string(),
  image: z.string().nullable(),
  privacy: z.enum(PostPrivacy).default(PostPrivacy.PUBLIC).nonoptional(),
})

export type CreatePostSchema = z.infer<typeof createPostSchema>
