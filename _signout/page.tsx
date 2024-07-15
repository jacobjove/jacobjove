import type { Metadata } from 'next';
import SignOutPage from './signout';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Page({ params }: { params: { locale: string } }) {
  return <SignOutPage />;
}
