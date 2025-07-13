import { createTRPCRouter } from '../init'

import { authRouter } from './procedures/auth'
import { postRouter } from './procedures/post'
import { userRouter } from './procedures/user'

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  post: postRouter,
})

export type AppRouter = typeof appRouter
