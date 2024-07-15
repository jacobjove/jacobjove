import { DetectionStrategy, Navigation, Middleware } from '@inlang/paraglide-next';
import type { AvailableLanguageTag } from '@paraglide/runtime';

const strategy = DetectionStrategy<AvailableLanguageTag>();

export const middleware = Middleware({ strategy });

export { useParams, useSearchParams } from 'next/navigation';

export const { Link, useRouter, usePathname, redirect, permanentRedirect } = Navigation({
  strategy,
});
