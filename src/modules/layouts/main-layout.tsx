import { Header } from '../components/header'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-5xl divide-x xl:max-w-7xl">
      <Header />
      <main className="min-h-screen flex-1/2">{children}</main>
      <aside className="hidden basis-10 flex-col md:flex xl:flex-1/4"></aside>
    </div>
  )
}
