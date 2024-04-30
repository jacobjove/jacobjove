import type { Metadata } from 'next';
import SignOutPage from './signout';
import { getStaticParams } from '@i18n';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Page({ params }: { params: { locale: string } }) {
  return <SignOutPage />;
}

export function generateStaticParams() {
  return getStaticParams();
}
