import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { routing } from './src/i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(ro|en)/:path*']
}
