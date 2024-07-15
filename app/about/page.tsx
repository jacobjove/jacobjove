import type { Metadata } from 'next';
import AboutPage from './about';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'About',
};

export default async function Page() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
