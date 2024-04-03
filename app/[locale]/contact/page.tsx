import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import ContactPage from './contact';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout fluid>
      <ContactPage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
