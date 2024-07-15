import type { Metadata } from 'next';
import TermsPage from './terms';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Terms',
};

export default async function Page() {
  return (
    <Layout maxWidth="sm">
      <TermsPage />
    </Layout>
  );
}
