import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

import { formSchema as signInSchema } from '@/modules/auth/schemas/login-form-schema'
import { formSchema as createAccountSchema } from '@/modules/auth/schemas/signup-form-schema'

export const authProcedure = createTRPCRouter({
  createAccount: baseProcedure
    .input(createAccountSchema)
    .mutation(async opts => {
      try {
        const { name, email, password } = opts.input

        await auth.api.signUpEmail({ body: { name, email, password } })

        await prisma.user.update({
          where: { email },
          data: { image: 'images/avatar.png' },
        })
      } catch (error) {
        const { message } = error as Error

        if (error instanceof APIError) {
          console.log(error.body)
        }

        throw new TRPCError({ code: 'BAD_REQUEST', message })
      }
    }),
  signIn: baseProcedure.input(signInSchema).mutation(async opts => {
    try {
      const { email, password } = opts.input

      await auth.api.signInEmail({
        body: { email, password, callbackURL: '/home' },
      })
    } catch (error) {
      const { message } = error as Error

      if (error instanceof APIError) {
        console.log(error.body)
      }

      throw new TRPCError({ code: 'BAD_REQUEST', message })
    }
  }),
})
