import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import PageHeader from '@components/PageHeader';

export default function About() {
  const t = useTranslations('about');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      <Typography textAlign="center">{'Coming soon.'}</Typography>
    </>
  );
}
