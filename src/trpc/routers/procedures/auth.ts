import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'

import { formSchema as createAccountSchema } from '@/modules/auth/schemas/signup-form-schema'

export const authProcedure = createTRPCRouter({
  createAccount: baseProcedure
    .input(createAccountSchema)
    .mutation(async opts => {
      try {
        const {} = opts.input
      } catch (error) {
        const { message } = error as Error

        throw new TRPCError({ code: 'BAD_REQUEST', message })
      }
    }),
})
