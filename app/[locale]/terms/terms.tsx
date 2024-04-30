'use client';

import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import PageHeader from '@components/PageHeader';

export default function Terms() {
  const t = useTranslations('terms');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      <Typography textAlign="center">{'Coming soon.'}</Typography>
    </>
  );
}
