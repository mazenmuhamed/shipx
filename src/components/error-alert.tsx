import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
} from 'lucide-react'

import { Alert, AlertDescription } from '@/components/ui/alert'

import { cn } from '@/lib/utils'

type Props = {
  variant?: 'default' | 'destructive'
  status?: 'success' | 'warning'
  description?: string
}

export function ErrorAlert({
  variant = 'default',
  status,
  description,
}: Props) {
  return (
    <Alert
      variant={variant}
      className={cn(
        status === 'success' &&
          'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950',
        status === 'warning' &&
          'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
      )}
    >
      {variant === 'default' && status === 'success' && (
        <CheckCircleIcon className="size-4 !text-green-700 dark:!text-green-200" />
      )}
      {variant === 'default' && status === 'warning' && (
        <AlertTriangleIcon className="size-4 !text-yellow-700 dark:!text-yellow-200" />
      )}
      {variant === 'destructive' && <AlertCircleIcon className="size-4" />}
      {/* <AlertTitle
        className={cn(
          status === 'success' && 'text-green-800 dark:text-green-200',
          status === 'warning' && 'text-yellow-800 dark:text-yellow-200',
        )}
      >
        {title}
      </AlertTitle> */}
      <AlertDescription
        className={cn(
          status === 'success' && 'text-green-700 dark:text-green-300',
          status === 'warning' && 'text-yellow-700 dark:text-yellow-300',
        )}
      >
        {description}
      </AlertDescription>
    </Alert>
  )
}
