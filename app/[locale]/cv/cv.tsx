'use client';

import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PageHeader from '@components/PageHeader';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/jacobjove/';

interface Resume {
  url: string;
  // name: string;
}

interface CVPageProps {
  resume: Resume;
}

export default function CV({ resume }: CVPageProps) {
  const t = useTranslations('cv');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '210mm', // A4
            minHeight: '297mm', // A4
            mx: 'auto',
            position: 'relative',
          }}
        >
          <>
            <IconButton
              href={resume.url}
              sx={{ position: 'absolute', right: '8px', top: '8px' }}
              download
            >
              <FileDownloadIcon />
            </IconButton>
            <embed
              src={`${resume.url}#toolbar=0&navpanes=0&scrollbar=0`}
              style={{ width: '100%' }}
              height="1079" // pixels
              type="application/pdf"
            />
          </>
        </Box>
      </Box>
      <Box textAlign={'center'} my={2}>
        <div
          className="badge-base LI-profile-badge text-center"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="jacobjove"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/jacobjove?trk=profile-badge"
            target="_blank"
            rel="noreferrer"
            title={LINKEDIN_PROFILE_URL}
          />
        </div>
      </Box>
    </>
  );
}
