import { Resend } from 'resend'

import { verificationEmailTemplate } from './email-templates/verification'

export const resend = new Resend(process.env.RESEND_API_KEY)

type SendEmailParams = { to: string; subject: string; html: string }

async function sendEmail({ to, subject, html }: SendEmailParams) {
  try {
    await resend.emails.send({
      from: 'ShipX <onboarding@resend.dev>',
      to,
      subject,
      html,
    })
  } catch (error) {
    console.log('[SEND_EMAIL]', error)

    throw new Error('Failed to send email')
  }
}

type SendVerificationEmailParams = {
  identifier: string
  url: string
  token: string
}

export async function sendVerificationEmail({
  identifier,
  url,
}: SendVerificationEmailParams) {
  try {
    await sendEmail({
      to: identifier,
      subject: 'Verify your email',
      html: verificationEmailTemplate(url),
    })
  } catch (error) {
    console.log('[SEND_VERIFICATION_REQUEST]', error)

    throw new Error('Failed to send verification email')
  }
}
