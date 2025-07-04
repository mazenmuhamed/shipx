import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {
  variant?: 'default' | 'outline'
  title: string
  description: string
  price: number
  features: string[]
  popular?: boolean
  className?: string
}

export function PricingCard({
  variant = 'default',
  title,
  description,
  price,
  features,
  popular,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 rounded-3xl p-5',
        variant === 'default' && 'bg-muted',
        variant === 'outline' && 'border-muted border bg-transparent',
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-[22px] font-bold">{title}</h3>
          {popular && (
            <span className="text-background dark:text-foreground rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold">
              Popular
            </span>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-5xl font-semibold">${price}</span>
        <div className="flex flex-col text-xs">
          <span className="text-muted-foreground">per month</span>
          <span className="text-muted-foreground">biled yearly</span>
        </div>
      </div>
      <Button variant={variant}>Get started</Button>
      <ul className="text-muted-foreground space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
