export function ContactSidebarGroups() {
  return (
    <div className="flex flex-col gap-2 px-2">
      <h3 className="text-muted-foreground font-semibold">Groups chats</h3>
      <div className="flex flex-col">
        <p className="text-muted-foreground text-sm">
          <span className="font-semibold">Note:</span> Group chats are not yet
          implemented. This feature will be available in a future update.
        </p>
      </div>
      {/* <Button
        size="lg"
        variant="ghost"
        className="w-full justify-baseline gap-3 !px-1.5 opacity-85 hover:opacity-100"
      >
        <div className="flex size-9 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
          <PlusIcon className="text-foreground size-5" />
        </div>
        <span className="text-[15px]">Create new group</span>
      </Button> */}
    </div>
  )
}
