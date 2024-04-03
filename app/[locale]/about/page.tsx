import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import AboutPage from './about';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'About',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
