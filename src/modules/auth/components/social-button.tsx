'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

type Props = {
  provider: 'google' | 'github'
  variant?: React.ComponentProps<typeof Button>['variant']
}

export function SocialButton({ provider, variant = 'default' }: Props) {
  if (provider === null || provider === undefined) {
    throw new Error('Please add a provider name')
  }

  async function handleSocialSignIn() {
    console.log(`Sign in with ${provider} clicked`)
  }

  return (
    <Button variant={variant} onClick={handleSocialSignIn}>
      <Image
        src={`logos/${provider}-logo.svg`}
        alt={`${provider} logo`}
        width={21}
        height={21}
        draggable={false}
        className={cn(provider === 'github' && 'dark:invert')}
      />
      Continue with {provider.replace(/^\w/, c => c.toUpperCase())}
    </Button>
  )
}
