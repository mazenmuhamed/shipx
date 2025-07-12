import Link from 'next/link'
import Image from 'next/image'

import { Searchbar } from './searchbar'
import { HeaderLinks } from './header-links'
import { HeaderActions } from './header-actions'

export function Header() {
  return (
    <header className="box sticky inset-x-0 top-0 z-50 flex h-14 w-full items-center justify-between gap-8 border-b px-4 md:gap-0">
      <div className="flex w-full max-w-96 items-center gap-4">
        <Link href="/home">
          <Image
            src="/brand/logo-light.svg"
            alt="ShipX Logo"
            width={25}
            height={25}
            draggable={false}
            className="min-h-8 min-w-8 select-none"
          />
        </Link>
        <Searchbar />
      </div>
      <HeaderLinks />
      <HeaderActions />
    </header>
  )
}
