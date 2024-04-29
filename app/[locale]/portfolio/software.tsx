'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import PageHeader from '@components/PageHeader';

const PROJECTS: [string, string, string, string, string[]][] = [
  [
    'SelfBuilder',
    'https://selfbuilder.orega.org/',
    'https://github.com/iacobfred/selfbuilder',
    'SelfBuilder (under development) is a web app that helps you manage your time, build habits, and achieve your personal goals.',
    [
      'Next.js',
      'React',
      'TypeScript',
      'MongoDB',
      'Docker',
    ],
  ],
  [
    'ModularHistory',
    'https://modularhistory.orega.org/',
    'https://github.com/ModularHistory/modularhistory',
    'ModularHistory is a web app that organizes information about the history of humanity.',
    [
      'Next.js',
      'React',
      'TypeScript',
      'Postgres',
      'Elasticsearch',
      'Docker',
    ],
  ],
  [
    'KW Striping',
    'https://kwstriping.com/',
    'https://github.com/SokaiSolutions/tempo',
    'KW Striping is the web app used by KW Striping (a small Utah business) to accept service requests from customers.',
    [
      'Django',
      'Python',
      'TypeScript',
      'Postgres',
      'Docker',
    ],
  ],
  [
    'GHA',
    'https://github.com/iacobfred/gha',
    'https://github.com/iacobfred/gha',
    "GHA is a monorepo containing GitHub Actions that I've written, including `generate-dotenv` and `deploy-docker-ssh`.",
    ['TypeScript', 'GitHub Actions'],
  ],
];

export default function Projects() {
  const t = useTranslations('portfolio.software');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography textAlign={'center'} flexBasis={'100%'}>
          {t('lead')}
        </Typography>
        <div>
          {PROJECTS.map(
            ([
              name,
              url,
              sourceUrl,
              description,
              technologies,
            ]) => (
              <Box key={name} my={4}>
                <Typography variant={'h2'} mb={'0.25rem'}>
                  <a href={url} target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                    {name}
                  </a>
                </Typography>
                <Typography component={'p'} variant={'body2'}>
                  {description}
                </Typography>
                <Typography fontSize={'0.9rem'} mt={1}>
                  <strong>{'Homepage: '}</strong>
                  <a href={url} target={'_blank'} rel="noreferrer">
                    {url}
                  </a>
                </Typography>
                <Typography fontSize={'0.9rem'} mt={1}>
                  <strong>{'Tech: '}</strong>
                  <em>{technologies.join(', ')}</em>
                </Typography>
                <Typography fontSize={'0.9rem'} mt={1}>
                  <strong>{'Repo: '}</strong>
                  <a href={sourceUrl} target={'_blank'} rel="noreferrer">
                    {sourceUrl}
                  </a>
                </Typography>
              </Box>
            )
          )}
        </div>
      </Box>
    </>
  );
}
