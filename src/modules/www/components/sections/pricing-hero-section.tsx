'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Building2Icon, GraduationCapIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'
import { PricingCard } from '../pricing-card'

type PlanState = 'quarterly' | 'yearly'

export function PricingHeroSection() {
  const [planState, setPlanState] = useState<PlanState>('yearly')

  return (
    <header className="flex flex-col items-center gap-10 px-6 md:px-4">
      <div className="flex w-full flex-col items-center gap-5 text-center md:max-w-6xl">
        <TextAnimate
          as="h1"
          duration={0.2}
          once
          className="text-center text-4xl font-bold sm:text-5xl lg:text-6xl lg:leading-16"
        >
          Manage your business like a Pro.
        </TextAnimate>
        <TextAnimate
          as="p"
          delay={0.2}
          animation="blurIn"
          once
          className="text-muted-foreground max-w-4xl text-base lg:text-lg"
        >
          Get full access to all features from only $0.33 per day — Cancel
          anytime.
        </TextAnimate>
      </div>
      <BlurFade
        direction="up"
        className="flex w-full max-w-3xl flex-col gap-12"
        delay={0.3}
        inView
        inViewMargin="-50px"
      >
        <PlanSwitch planState={planState} setPlanState={setPlanState} />
        <div className="grid w-full gap-5 md:grid-cols-4">
          <PricingCard
            popular
            title="Pro"
            description="For creators & sellers"
            price={planState === 'yearly' ? 10 : 12}
            features={[
              'Unlimited product listings',
              'Advanced analytics dashboard',
              'Social media integration',
              'Customer messaging',
              'Payment processing',
              'Mobile app access',
            ]}
            className="md:col-span-2"
          />
          <PricingCard
            variant="outline"
            title="Business"
            description="For growing businesses"
            price={planState === 'yearly' ? 25 : 30}
            features={[
              'All Pro features',
              'Team collaboration tools',
              'Advanced inventory management',
              'Custom branding & storefront',
              'Priority customer support',
              'API access & integrations',
              'Bulk operations & automation',
            ]}
            className="md:col-span-2"
          />
        </div>
      </BlurFade>
      <BlurFade
        direction="up"
        className="mt-12 flex w-full max-w-3xl flex-col gap-12"
        inView
        inViewMargin="-50px"
      >
        <div className="grid w-full items-center justify-center gap-8 md:grid-cols-4 md:gap-5">
          <div className="flex max-w-md flex-col items-center gap-2 md:col-span-2">
            <Building2Icon className="size-7" />
            <h4 className="text-lg font-medium">Enterprise</h4>
            <p className="text-muted-foreground text-center">
              Get advanced security, dedicated account management, solutions and
              priority support.
            </p>
            <Button variant="link" className="w-fit text-[15px]">
              Contact Sales
            </Button>
          </div>
          <div className="flex max-w-md flex-col items-center gap-2 sm:col-span-2">
            <GraduationCapIcon className="size-8" />
            <h4 className="text-lg font-medium">Student or educator?</h4>
            <p className="text-muted-foreground text-center">
              Discover ShipX for Education and get a discount if you’re
              eligible.
            </p>
            <Button variant="link" className="w-fit text-[15px]">
              Read more
            </Button>
          </div>
        </div>
      </BlurFade>
    </header>
  )
}

type PlanSwitchProps = {
  planState: PlanState
  setPlanState: (state: PlanState) => void
}

function PlanSwitch({ planState, setPlanState }: PlanSwitchProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-secondary text-secondary-foreground flex rounded-full p-1.5">
        <div className="w-fit">
          {['yearly', 'quarterly'].map(plan => (
            <button
              key={plan}
              className={cn(
                'relative cursor-pointer rounded-full px-4 py-1.5 text-[15px] font-medium opacity-60 transition-colors',
                planState === plan && 'opacity-100',
              )}
              onClick={() => setPlanState(plan as PlanState)}
            >
              {plan === planState ? (
                <motion.div
                  layoutId="background"
                  id="background"
                  className="bg-background dark:bg-popover dark:text-popover-foreground absolute inset-0 rounded-full"
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                />
              ) : null}
              <span className="relative z-10">
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
      <p className="text-[15px]">
        <span className="font-medium text-blue-600 opacity-100">Save 33%</span>{' '}
        <span className="opacity-70">on a yearly subscription</span>
      </p>
    </div>
  )
}
