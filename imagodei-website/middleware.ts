import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next static files
  // - _next images
  // - favicon.ico
  // - public files with extensions
  matcher: ['/', '/(ro|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}
