'use client'

import { useState } from 'react'
import { ChevronDownIcon, EarthIcon, UsersIcon, LockIcon } from 'lucide-react'
import { SelectTrigger } from '@radix-ui/react-select'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem } from '@/components/ui/select'

const options = [
  { value: 'public', icon: EarthIcon, label: 'Public' },
  { value: 'friends', icon: UsersIcon, label: 'Friends' },
  { value: 'only_me', icon: LockIcon, label: 'Only me' },
]

type PostPrivacy = 'public' | 'friends' | 'only_me'

export function PostPrivacyButton() {
  const [selectedOption, setSelectedOption] = useState<PostPrivacy>('public')

  return (
    <Select
      defaultValue={selectedOption}
      onValueChange={e => setSelectedOption(e as PostPrivacy)}
    >
      <SelectTrigger asChild>
        <Button
          size="sm"
          variant="secondary"
          className="h-7 w-fit rounded-md px-2"
        >
          {options
            .filter(option => option.value === selectedOption)
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
  )
}
