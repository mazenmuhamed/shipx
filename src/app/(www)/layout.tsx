export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-popover dark:text-popover-foreground">
      {children}
    </div>
  )
}
