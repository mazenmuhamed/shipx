import { baseAuthProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

import { loginSchema } from '@/modules/auth/schemas/login-schema'
import { createAccountSchema } from '@/modules/auth/schemas/signup-schema'
import { forgotPasswordSchema } from '@/modules/auth/schemas/forgot-password-schema'
import { resetPasswordSchema } from '@/modules/auth/schemas/reset-password-schema'
import z from 'zod'

export const authProcedure = createTRPCRouter({
  createAccount: baseAuthProcedure
    .input(createAccountSchema)
    .mutation(async opts => {
      try {
        const { name, email, password } = opts.input

        await auth.api.signUpEmail({ body: { name, email, password } })

        // Set a default avatar image after account creation
        await prisma.user.update({
          where: { email },
          data: { image: '/images/avatar.png' },
        })
      } catch (error) {
        console.log('[CREATE_ACCOUNT_ERR]', error)

        if (error instanceof APIError && error.body?.message) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: error.body.message,
          })
        }

        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
      }
    }),
  signIn: baseAuthProcedure.input(loginSchema).mutation(async opts => {
    try {
      const { email, password } = opts.input

      await auth.api.signInEmail({ body: { email, password } })
    } catch (error) {
      console.log('[SIGN_IN_ERR]', error)

      if (error instanceof APIError) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: error.body?.message,
        })
      }

      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
    }
  }),
  forgotPassword: baseAuthProcedure
    .input(forgotPasswordSchema)
    .mutation(async opts => {
      try {
        const { email } = opts.input

        await auth.api.forgetPassword({
          body: { email: email, redirectTo: '/reset-password' },
        })
      } catch (error) {
        console.log('[FORGOT_PASSWORD_ERR]', error)

        if (error instanceof APIError) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: error.body?.message,
          })
        }

        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
      }
    }),
  resetPassword: baseAuthProcedure
    .input(
      z.object({
        password: resetPasswordSchema.shape.password,
        token: z.string().min(1, 'Token is required'),
      }),
    )
    .mutation(async opts => {
      try {
        const { password, token } = opts.input

        await auth.api.resetPassword({ body: { newPassword: password, token } })
      } catch (error) {
        console.log('[RESET_PASSWORD_ERR]', error)

        if (error instanceof APIError) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: error.body?.message,
          })
        }

        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
      }
    }),
})
