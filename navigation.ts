import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@i18n/settings';
export { notFound, useSearchParams, useParams } from 'next/navigation';

export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
