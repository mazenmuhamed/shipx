import { Header } from '../components/header'

type Props = { children: React.ReactNode }

export function MainLayout({ children }: Props) {
  return (
    <div className="bg-muted/40 dark:bg-popover/80 dark:text-popover-foreground min-h-svh">
      <Header />
      <main className="mx-auto 2xl:max-w-[140rem]">{children}</main>
    </div>
  )
}
