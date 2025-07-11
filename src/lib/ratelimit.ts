import { Ratelimit } from '@upstash/ratelimit'
import { redis } from './redis'

export const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(30, '10 s'),
  prefix: 'ratelimit:',
  /**
   * Enable analytics to track usage
   * This will store usage data in a sorted set in Redis
   */
  analytics: true,
})

export const ratelimitAuth = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  prefix: 'ratelimit-auth:',
  /**
   * Enable analytics to track usage
   * This will store usage data in a sorted set in Redis
   */
  analytics: true,
})
