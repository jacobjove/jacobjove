import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import PrivacyPage from './privacy';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Privacy',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout maxWidth="sm">
      <PrivacyPage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
