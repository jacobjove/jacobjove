import type { Metadata } from 'next';
import SignOutPage from './signout';
import Layout from '@app/client/layout';
import { getStaticParams } from '@i18n';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Page({ params }: { params: { locale: string } }) {
  return (
    <Layout>
      <SignOutPage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
