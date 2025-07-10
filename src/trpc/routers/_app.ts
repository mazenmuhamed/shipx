import { createTRPCRouter } from '../init'

import { authProcedure } from './procedures/auth'

export const appRouter = createTRPCRouter({
  auth: authProcedure,
})

export type AppRouter = typeof appRouter
