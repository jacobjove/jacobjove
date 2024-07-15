import type { Metadata } from 'next';
import SignInPage from './signin';
import { getProviders } from '@app/auth';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Page() {
  const providers = getProviders();
  return <SignInPage providers={providers} />;
}
