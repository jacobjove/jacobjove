import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { localePrefix } from './navigation';
import { locales, defaultLocale } from '@i18n/settings';

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  localePrefix,
});

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }
  return i18nMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|.*\\.).*)',
    // Match only internationalized pathnames
    // '/(en|jp|ko)/:path*'
  ],
};
