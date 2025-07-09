'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import {
  ArrowUpRight,
  CreditCard,
  Database,
  LifeBuoy,
  Menu,
  Monitor,
  Moon,
  ShoppingBasket,
  Sun,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ActionTooltip } from '@/modules/ui/action-tooltip'

export function MenuButton() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <ActionTooltip tooltip="Menu">
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className="size-11">
            <Menu className="size-5" />
          </Button>
        </DropdownMenuTrigger>
      </ActionTooltip>
      <DropdownMenuContent
        align="end"
        sideOffset={14}
        className="w-56 rounded-2xl"
      >
        <DropdownMenuGroup className="space-y-2 p-2 md:hidden">
          <DropdownMenuItem
            asChild
            className="!bg-primary !text-primary-foreground hover:!bg-primary/90 rounded-full"
          >
            <Button asChild className="h-9 w-full cursor-pointer rounded-full">
              <Link href="/signup">Create free account</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="!bg-secondary !text-secondary-foreground hover:!bg-secondary/80 rounded-full"
          >
            <Button
              asChild
              variant="secondary"
              className="h-9 w-full cursor-pointer rounded-full"
            >
              <Link href="/login">Log in</Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center justify-between py-2.5 hover:!bg-transparent focus:!bg-transparent">
            <span className="text-[15px] font-medium">Theme</span>
            <div className="bg-secondary flex items-center space-x-1 rounded-full p-1.5">
              <ActionTooltip
                asChild={false}
                tooltip="Light"
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'light' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
                onClick={() => setTheme('light')}
              >
                <Sun className="size-5" />
              </ActionTooltip>
              <ActionTooltip
                asChild={false}
                tooltip="Dark"
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'dark' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
                onClick={() => setTheme('dark')}
              >
                <Moon className="size-5" />
              </ActionTooltip>
              <ActionTooltip
                asChild={false}
                tooltip="System"
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'system' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
                onClick={() => setTheme('system')}
              >
                <Monitor className="size-5" />
              </ActionTooltip>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-2">
          <DropdownMenuItem asChild className="sm:hidden">
            <Link
              href="/pricing"
              className={cn(
                'flex items-center gap-2 !rounded-xl py-2.5 text-[15px] opacity-80',
                pathname === '/pricing' && 'font-medium opacity-100',
              )}
            >
              <CreditCard className="size-5" />
              Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="sm:hidden" disabled>
            <Link
              href="/marketplace"
              className={cn(
                'flex items-center gap-2 !rounded-xl py-2.5 text-[15px] opacity-80',
                pathname === '/marketplace' && 'font-medium opacity-100',
              )}
            >
              <ShoppingBasket className="size-5" />
              Marketplace
              <Badge
                variant="secondary"
                className="ml-auto text-[10px] uppercase"
              >
                Soon
              </Badge>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled asChild>
            <Link
              href="/"
              className="flex items-center gap-2 !rounded-xl py-2.5 text-[15px]"
            >
              <Database className="size-5" />
              API
              <DropdownMenuShortcut className="text-xs">
                <ArrowUpRight className="size-5" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link
              href="/"
              className="flex items-center gap-2 !rounded-xl py-2.5 text-[15px]"
            >
              <LifeBuoy className="size-5" />
              Support
              <DropdownMenuShortcut className="text-xs">
                <ArrowUpRight className="size-5" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="!justify-center py-2.5 hover:!bg-transparent focus:!bg-transparent">
          <p className="text-muted-foreground text-center text-xs">
            &copy; ShipX {new Date().getFullYear()}.
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
