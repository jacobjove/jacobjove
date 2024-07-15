import type { Metadata } from 'next';
import PortfolioPage from './portfolio';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function Page() {
  return (
    <Layout maxWidth="sm">
      <PortfolioPage />
    </Layout>
  );
}
