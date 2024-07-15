'use client';

import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface Resume {
  url: string;
  // name: string;
}

interface CVPageProps {
  resume: Resume;
}

export default function CV({ resume }: CVPageProps) {
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
    </>
  );
}
