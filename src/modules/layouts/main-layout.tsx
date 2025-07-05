import { Header } from '../components/header'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto 2xl:max-w-[90rem]">{children}</main>
    </>
  )
}
