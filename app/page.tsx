import type { Metadata } from 'next';
import HomePage from '@app/client/home-page';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
