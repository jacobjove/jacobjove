import type { Metadata } from 'next';
import EssaysPage from './essays';
import { ESSAYS } from './[slug]/page';
import Layout from '@app/client/layout';

export const metadata: Metadata = {
  title: 'Essays',
};

export default async function Page({ params }: { params: { locale: string; slug: string } }) {
  return (
    <Layout>
      <EssaysPage essays={ESSAYS} />
    </Layout>
  );
}
