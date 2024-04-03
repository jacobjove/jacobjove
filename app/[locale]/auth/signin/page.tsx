import type { Metadata } from 'next';
import { getProviders } from 'next-auth/react';
import SignInPage from './signin';
import Layout from '@app/client/layout';
import { getStaticParams } from '@i18n';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Page({ params }: { params: { locale: string } }) {
  const providers = await getProviders();
  return (
    <Layout>
      <SignInPage providers={providers} />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
