/**
 * Public routes that do not require authentication.
 * These routes can be accessed by anyone without logging in.
 */
export const PUBLIC_ROUTES = ['/pricing']

/**
 * Public routes to handle authentication.
 * Authenticated users cannot access these routes after logging in.
 */
export const AUTH_ROUTES = [
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
]
