import { cache } from 'react'
import { headers } from 'next/headers'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

import { auth } from '@/lib/auth'
import { ratelimit, ratelimitAuth } from '@/lib/ratelimit'

export const createTRPCContext = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return { user: session?.user }
})

export type Context = Awaited<ReturnType<typeof createTRPCContext>>

const t = initTRPC.context<Context>().create({ transformer: superjson })

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure

/**
 * Base procedure for unauthenticated users with rate limiting
 * This is used for public endpoints like sign up, sign in, etc.
 */
export const baseAuthProcedure = baseProcedure.use(async opts => {
  const { success } = await ratelimitAuth.limit('anonymous')

  if (!success) {
    throw new TRPCError({
      code: 'TOO_MANY_REQUESTS',
      message: 'You are making too many requests, Please try again later.',
    })
  }

  return opts.next()
})

/**
 * Protected procedure for authenticated users with rate limiting
 * This is used for endpoints that require authentication
 */
export const protectedProcedure = baseProcedure.use(async opts => {
  const { user } = opts.ctx

  if (!user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  const { success } = await ratelimit.limit(user.id)

  if (!success) {
    throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })
  }

  return opts.next({
    ctx: { ...opts.ctx, user },
  })
})
