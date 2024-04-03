import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getStaticParams } from '@i18n';
import HomePage from '@app/client/home-page';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
