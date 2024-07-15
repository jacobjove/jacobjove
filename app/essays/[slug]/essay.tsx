'use client';

import type { NextPage } from 'next';
import ErrorPage from 'next/error';

import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export interface Essay {
  url: string;
  title: string;
  description?: string;
}

interface EssayPageProps {
  essay: Essay;
}

const EssayPage: NextPage<EssayPageProps> = ({ essay }) => {
  if (!essay?.url) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
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
              href={essay.url}
              sx={{ position: 'absolute', right: '8px', top: '8px' }}
              download
            >
              <FileDownloadIcon />
            </IconButton>
            <embed
              src={`${essay.url}#toolbar=0&navpanes=0&scrollbar=0`}
              style={{ width: '100%' }}
              height="1079" // pixels
              type="application/pdf"
            />
          </>
        </Box>
      </Box>
    </>
  );
};

export default EssayPage;
