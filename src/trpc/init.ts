import { cache } from 'react'
import { headers } from 'next/headers'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

import { auth } from '@/lib/auth'

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

export const protectedProcedure = baseProcedure.use(async opts => {
  const { user } = opts.ctx

  if (!user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return opts.next({
    ctx: { ...opts.ctx, user },
  })
})
