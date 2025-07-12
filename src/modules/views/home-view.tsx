'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { trpc } from '@/trpc/client'

import { ErrorFallback } from '../ui/error-fallback'
import { LoadingIndicator } from '../ui/loading-indicator'

import { CreatePost } from '../posts/create-post'
import { MainSidebar } from '../components/main-sidebar'
import { ContactSidebar } from '../components/contact-sidebar'

export function HomeView() {
  return (
    <Suspense fallback={<LoadingIndicator className="h-24" />}>
      <ErrorBoundary fallback={<ErrorFallback className="h-24" />}>
        <HomeViewSuspense />
      </ErrorBoundary>
    </Suspense>
  )
}

function HomeViewSuspense() {
  const [user] = trpc.user.getUser.useSuspenseQuery()

  return (
    <div className="flex gap-4 px-2">
      <MainSidebar user={user} />
      <div className="min-h-svh w-full py-4">
        <div className="mx-auto w-full max-w-[30rem] space-y-4 sm:max-w-[31.25rem] 2xl:max-w-[36rem]">
          <CreatePost user={user} />
        </div>
      </div>
      <ContactSidebar />
    </div>
  )
}
