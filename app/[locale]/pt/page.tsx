import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import PTPage from './pt';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Personal Training',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout>
      <PTPage data={[]} />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
