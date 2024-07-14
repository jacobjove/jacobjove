'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import PageHeader from '@components/PageHeader';

const GITHUB_PROFILE_URL = 'https://github.com/jacobjove';

export default function Projects() {
  const t = useTranslations('portfolio');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography textAlign={'center'} flexBasis={'100%'}>
          {t('lead')}
        </Typography>
        <div>
          <p>
            {'For software projects, see my '}
            <a href={GITHUB_PROFILE_URL} target={'_blank'} rel="noreferrer">
              {'GitHub profile'}
            </a>
            {'.'}
          </p>
        </div>
      </Box>
    </>
  );
}
