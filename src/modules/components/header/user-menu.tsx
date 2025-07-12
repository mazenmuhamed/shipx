'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import {
  BadgeInfoIcon,
  CheckIcon,
  DoorOpenIcon,
  HeartPlusIcon,
  MonitorIcon,
  MoonIcon,
  SettingsIcon,
  StoreIcon,
  SunIcon,
  LucideProps,
} from 'lucide-react'
import { User } from 'better-auth'

import { cn } from '@/lib/utils'
import { authClient } from '@/lib/auth-client'
import { useBreakPoint } from '@/hooks/use-breakpoint'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { UserAvatar } from '@/modules/ui/user-avatar'
import { ActionTooltip } from '@/modules/ui/action-tooltip'

export function UserMenu({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const isMobile = useBreakPoint(392)

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsOpen(false)
          router.replace('/')
        },
      },
    })
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <ActionTooltip tooltip="Account">
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'border-border/70 rounded-full border p-0 dark:border-transparent',
              isOpen && 'focus:ring-ring ring-primary ring-2 focus:ring-2',
            )}
          >
            <UserAvatar src={user.image} alt={user.name} disableNavigation />
          </Button>
        </DropdownMenuTrigger>
      </ActionTooltip>
      <DropdownMenuContent
        align={isMobile ? 'center' : 'end'}
        className="w-72 rounded-2xl sm:w-80"
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <DropdownMenuGroup className="bg-secondary/30 m-2 flex flex-col gap-1 rounded-2xl border p-2">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Button
              asChild
              variant="ghost"
              className="h-14 w-full justify-start gap-3 rounded-2xl text-base"
            >
              <Link href={`/profile/${user.id}`}>
                <UserAvatar
                  src={user.image}
                  alt={user.name}
                  disableNavigation
                />
                <span className="font-medium">{user.name}</span>
              </Link>
            </Button>
          </DropdownMenuItem>
          <div>
            <UserMenuItem
              isDisabled
              isPremiumFeature
              label="Start a Business"
              icon={StoreIcon}
              className="h-10 text-sm [&_svg]:size-5"
            />
            <UserMenuItem
              isDisabled
              isPremiumFeature
              label="Subscribers"
              icon={HeartPlusIcon}
              className="h-10 text-sm [&_svg]:size-5"
            />
          </div>
          <Button
            asChild
            variant="secondary"
            className="w-full rounded-xl border"
          >
            <Link href="/pricing">Manage Subscriptions</Link>
          </Button>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="p-1.5">
          <UserMenuItem label="Settings & privacy" icon={SettingsIcon} />
          <DropdownMenuSub>
            <UserMenuItem
              haveSubMenu
              label="Display & accessibility"
              icon={MoonIcon}
            />
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                sideOffset={isMobile ? -80 : 3}
                alignOffset={isMobile ? 200 : 0}
                className="w-28 rounded-2xl"
              >
                <UserMenuSubItem label="Light" icon={SunIcon} />
                <UserMenuSubItem label="Dark" icon={MoonIcon} />
                <UserMenuSubItem label="System" icon={MonitorIcon} />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <UserMenuItem
            isDisabled
            label="Help & support"
            icon={BadgeInfoIcon}
          />
          <UserMenuItem
            label="Log out"
            icon={DoorOpenIcon}
            onSelect={handleLogout}
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <p className="text-muted-foreground mt-4 mb-3 text-center text-xs">
          &copy; ShipX {new Date().getFullYear()}. All rights reserved.
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type MenuItemProps = {
  /**
   * The label for the menu item
   */
  label: string
  /**
   * The icon component to display
   */
  icon: React.ComponentType<React.PropsWithChildren<LucideProps>>
  /**
   * Callback function to execute when the item is selected
   */
  onSelect?: VoidFunction
}

type UserMenuItem = MenuItemProps & {
  /**
   * Whether the item is a premium feature.
   * If true, a badge will be displayed next to the item.
   */
  isPremiumFeature?: boolean
  /** Whether the item has a sub-menu
   * If true, it will use `DropdownMenuSubTrigger` instead of `DropdownMenuItem`.
   * This is useful for items that lead to a sub-menu of options.
   */
  haveSubMenu?: boolean
  /**
   * Optional className for additional styling
   */
  className?: string
  /**
   * Whether the item is disabled
   * If true, the item will be unclickable and styled as disabled.
   */
  isDisabled?: boolean
  /**
   * Callback function to execute when the item is selected
   */
  onSelect?: VoidFunction
}

export function UserMenuItem({
  label,
  haveSubMenu,
  isPremiumFeature,
  isDisabled,
  className,
  onSelect,
  icon: Icon,
}: UserMenuItem) {
  const Element = haveSubMenu ? DropdownMenuSubTrigger : DropdownMenuItem

  return (
    <Element
      onSelect={onSelect}
      disabled={isDisabled}
      className={cn(
        'text-foreground [&_svg]:!text-foreground flex h-12 cursor-pointer items-center justify-between rounded-xl text-[15px]',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-[22px]" />
        <span>{label}</span>
      </div>
      {isPremiumFeature && (
        <Badge variant="premium" className="ml-auto">
          Premium
        </Badge>
      )}
    </Element>
  )
}

export function UserMenuSubItem({ label, icon: Icon }: MenuItemProps) {
  const { theme, setTheme } = useTheme()

  const activeTheme = theme === label.toLowerCase()

  return (
    <DropdownMenuItem
      className="h-8 gap-3 rounded-lg"
      onSelect={() => setTheme(label.toLowerCase())}
    >
      <Icon className="text-foreground size-4" />
      <span className="text-sm">{label}</span>
      {activeTheme && <CheckIcon className="text-card-foreground ml-auto" />}
    </DropdownMenuItem>
  )
}
