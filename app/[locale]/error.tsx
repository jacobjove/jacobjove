'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Layout from '@app/client/layout';

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <Layout>
      <h2>Something went wrong!</h2>
    </Layout>
  );
}
