import { Header } from '../components/header'

type Props = { children: React.ReactNode }

export function MainLayout({ children }: Props) {
  return (
    <div className="bg-muted/60 dark:bg-muted/20 min-h-svh">
      <Header />
      <main className="mx-auto 2xl:max-w-[120rem]">{children}</main>
    </div>
  )
}
