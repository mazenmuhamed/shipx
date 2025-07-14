import { ErrorFallback } from '@/modules/ui/error-fallback'
import { LoadingIndicator } from '@/modules/ui/loading-indicator'
import { trpc } from '@/trpc/client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { FeedBox } from './feed-box'

export function Feed() {
  return (
    <Suspense fallback={<LoadingIndicator className="my-6" />}>
      <ErrorBoundary fallback={<ErrorFallback className="my-6" />}>
        <FeedSuspense />
      </ErrorBoundary>
    </Suspense>
  )
}

function FeedSuspense() {
  const [posts] = trpc.post.getPosts.useSuspenseQuery()

  return (
    <>
      {posts.map(post => (
        <FeedBox key={post.id} post={post} />
      ))}
    </>
  )
}
