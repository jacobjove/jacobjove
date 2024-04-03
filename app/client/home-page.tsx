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
        <Image priority src="/images/profile.jpg" height={144} width={144} alt={'Jacob Jove'} />
        <Box maxWidth={'26rem'} padding={'5px'}>
          <Typography className="lead">
            Jacob Jove is a data scientist, technical consultant, writer,{' '}
            <Link href="/pt">personal trainer</Link>, amateur chef, co-founder of{' '}
            <a href="https://www.sokaisolutions.com/" target="_blank" rel="noreferrer">
              Sokai Solutions
            </a>
            ,{' and upcoming legal professional.'}
          </Typography>
        </Box>
        {/* TODO: - Background Image or Visual Element
          - Welcome Message: "Welcome to [Your Name]'s Website"
          - Call-to-Action Button: "Explore My Work" */}
      </Box>
    </>
  );
}
