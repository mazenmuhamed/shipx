import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure } from '@/trpc/init'

import { prisma } from '@/lib/prisma'

import { createPostSchema } from '@/modules/posts/schema/create-post-schema'

export const postRouter = createTRPCRouter({
  createPost: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const { id } = ctx.user
      const { content, image, privacy } = input

      if (!content && !image) {
        throw new TRPCError({ code: 'BAD_REQUEST' })
      }

      const post = await prisma.post.create({
        data: { image, content, userId: id, privacy },
      })

      return post
    }),
  getPosts: protectedProcedure.query(async () => {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        likes: true,
        comments: true,
      },
    })

    return posts
  }),
})
