import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import WritingPortfolioPage from './writing';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  return (
    <Layout maxWidth="sm">
      <WritingPortfolioPage />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
