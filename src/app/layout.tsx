import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const font = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ShipX',
  description:
    'ShipX is a platform that helps you create & manage your social and business life in one place, making it easier to stay opened and connected with your community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
