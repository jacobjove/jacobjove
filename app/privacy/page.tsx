import type { Metadata } from 'next';
import PrivacyPage from './privacy';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Privacy',
};

export default async function Page() {
  return (
    <Layout maxWidth="sm">
      <PrivacyPage />
    </Layout>
  );
}
