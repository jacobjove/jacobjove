'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PageHeader from '@components/PageHeader';
import ContactForm from '@components/contact/ContactForm';

const NAME = 'Jacob T. Jove';
const EMAIL = 'jacob.t.jove@gmail.com';

const CONTACT_FORM_ENABLED = false;

export default function Contact() {
  const t = useTranslations('contact');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      {CONTACT_FORM_ENABLED && (
        <Box display="flex" justifyContent="center">
          <Typography sx={{ maxWidth: 'sm', mb: 2, px: 2 }}>{t('lead')}</Typography>
        </Box>
      )}
      <Box
        sx={{
          width: '100%',
          my: { sm: 2 },
          px: { sm: 4 },
          flexWrap: 'wrap',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { xs: 'stretch', sm: 'center', lg: 'start' },
          justifyContent: 'center',
          '& > div': {
            mb: 2,
            mx: { sm: 2 },
            pt: 1,
            minWidth: { sm: '30rem' },
            maxWidth: { xs: '40rem', sm: '33rem' },
          },
        }}
      >
        <Card>
          <CardContent sx={{ textAlign: 'center', px: 4 }}>
            <Image
              // priority
              src={'/images/profile.png'}
              style={{ borderRadius: '50%' }}
              height={108}
              width={108}
              alt={NAME}
            />
            <Typography variant={'h2'} sx={{ my: 2 }}>
              {t('name')}
            </Typography>
            <Box my={1}>
              <Typography>{'New York, NY 10031'}</Typography>
            </Box>
            <Typography my={1}>
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                {EMAIL}
              </a>
            </Typography>
          </CardContent>
        </Card>
        {CONTACT_FORM_ENABLED && (
          <Card>
            <CardContent sx={{ position: 'relative' }}>
              <ContactForm />
            </CardContent>
          </Card>
        )}
      </Box>
    </>
  );
}
