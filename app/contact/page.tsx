import type { Metadata } from 'next';
import ContactPage from './contact';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function Page() {
  return (
    <Layout fluid>
      <ContactPage />
    </Layout>
  );
}
