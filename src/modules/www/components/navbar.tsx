'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

export function Navbar({ className }: { className?: string }) {
  const [effects, setEffects] = useState({
    showButton: false,
    isExpanded: false,
  })

  const pathname = usePathname()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', current => {
    setEffects({ showButton: current > 350, isExpanded: current > 500 })
  })

  return (
    <div
      className={cn(
        'sticky top-5 right-0 left-0 z-50 flex items-center justify-center overflow-hidden',
        className,
      )}
    >
      <motion.nav
        initial={{ maxWidth: '36rem' }}
        animate={{ maxWidth: effects.isExpanded ? '40rem' : '36rem' }}
        transition={{ type: 'spring', duration: 0.5, ease: 'easeInOut' }}
        className="text-secondary-foreground bg-secondary flex w-full max-w-xl items-center justify-between rounded-full py-2 pr-2 pl-6 backdrop-blur-md"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="brand/logo-light.svg"
            alt="ShipX"
            width={26}
            height={26}
            className="object-contain select-none dark:invert"
          />
        </Link>
        <div className="flex items-center">
          <motion.div
            key="links"
            initial={{ x: 110 }}
            animate={{ x: effects.showButton ? -20 : 110 }}
            transition={{ type: 'spring', duration: 0.5, ease: 'easeInOut' }}
            className="flex items-center space-x-5"
          >
            <Link
              href="/pricing"
              className={cn(
                'font-medium transition hover:opacity-80',
                pathname === '/pricing' && 'font-semibold',
              )}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="font-medium transition hover:opacity-80"
            >
              Log in
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{
              opacity: effects.showButton ? 1 : 0,
              y: effects.showButton ? 0 : 55,
            }}
            transition={{ type: 'spring', duration: 0.4, ease: 'easeInOut' }}
          >
            <Button asChild className="h-10 rounded-full text-base">
              <Link href="/signup">Join for free</Link>
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  )
}
