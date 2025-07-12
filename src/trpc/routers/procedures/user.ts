import { prisma } from '@/lib/prisma'
import { createTRPCRouter, protectedProcedure } from '@/trpc/init'
import { TRPCError } from '@trpc/server'

export const userProcedure = createTRPCRouter({
  getUser: protectedProcedure.query(async opts => {
    const { user } = opts.ctx

    const data = await prisma.user.findUnique({
      where: { id: user.id },
    })

    if (!data) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })
    }

    return data
  }),
})
