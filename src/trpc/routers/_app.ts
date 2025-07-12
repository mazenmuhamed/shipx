import { createTRPCRouter } from '../init'

import { authProcedure } from './procedures/auth'
import { userProcedure } from './procedures/user'

export const appRouter = createTRPCRouter({
  auth: authProcedure,
  user: userProcedure,
})

export type AppRouter = typeof appRouter
