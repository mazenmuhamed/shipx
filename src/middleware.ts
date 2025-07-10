import { NextResponse, type NextRequest } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

import { PUBLIC_ROUTES, AUTH_ROUTES } from './lib/constants'

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request)

  const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname)
  const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname)

  if (isPublicRoute) return NextResponse.next()

  if (!sessionCookie && !isPublicRoute && !isAuthRoute) {
    const url = new URL('/login', request.nextUrl.origin)
    return NextResponse.redirect(url)
  }

  if (sessionCookie && isAuthRoute) {
    const url = new URL('/home', request.nextUrl.origin)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!api|_next/static|_next/image|images/|brand/|logos/|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
