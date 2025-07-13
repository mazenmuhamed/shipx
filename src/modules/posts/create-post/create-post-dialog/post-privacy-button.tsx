'use client'

import { Control } from 'react-hook-form'
import { PostPrivacy } from '@prisma/client'
import { SelectTrigger } from '@radix-ui/react-select'
import { ChevronDownIcon, EarthIcon, UsersIcon, LockIcon } from 'lucide-react'

import { CreatePostSchema } from '@/modules/posts/schema/create-post-schema'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Select, SelectContent, SelectItem } from '@/components/ui/select'

const options = [
  { value: PostPrivacy.PUBLIC, icon: EarthIcon, label: 'Public' },
  { value: PostPrivacy.FRIENDS, icon: UsersIcon, label: 'Friends' },
  { value: PostPrivacy.ONLY_ME, icon: LockIcon, label: 'Only me' },
]

type Props = {
  control: Control<CreatePostSchema>
}

export function PostPrivacyButton({ control }: Props) {
  return (
    <FormField
      control={control}
      name="privacy"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger asChild>
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-7 w-fit rounded-md px-2"
                >
                  {options
                    .filter(option => option.value === field.value)
                    .map(option => (
                      <div
                        key={option.value}
                        className="flex w-full items-center gap-1"
                      >
                        <option.icon className="size-4" />
                        <span className="text-xs">{option.label}</span>
                      </div>
                    ))}
                  <ChevronDownIcon className="size-3.5" />
                </Button>
              </SelectTrigger>
              <SelectContent
                className="dark:border-border/40 rounded-lg shadow"
                onCloseAutoFocus={e => e.preventDefault()}
              >
                {options.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    <option.icon className="size-4" />
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
