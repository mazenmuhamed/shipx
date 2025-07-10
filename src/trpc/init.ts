import { cache } from 'react'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

import { createClient } from '@/lib/supabase/server'

export const createTRPCContext = cache(async () => {
  const supabase = await createClient()

  const { data } = await supabase.auth.getUser()

  return { supabase, user: data.user }
})

type Context = Awaited<ReturnType<typeof createTRPCContext>>

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
