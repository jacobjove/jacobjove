'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Link } from '@navigation';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image priority src="/images/profile.png" height={275} width={275} alt={'Jacob Jove'} />
        <Box maxWidth={'26rem'} padding={'5px'}>
          <Typography className="lead">
            Jacob Jove is a writer, <Link href="/pt">personal trainer</Link>, co-founder of{' '}
            <a href="https://www.sokaisolutions.com/" target="_blank" rel="noreferrer">
              Sokai Solutions
            </a>
            ,{' and future lawyer.'}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
