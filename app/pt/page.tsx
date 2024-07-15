import type { Metadata } from 'next';
import PTPage from './pt';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Personal Training',
};

export default async function Page() {
  return (
    <Layout>
      <PTPage data={[]} />
    </Layout>
  );
}
