'use client';

import type { NextPage } from 'next';
import Box from '@mui/material/Box';

import type { Essay } from './[slug]/essay';

interface EssaysPageProps {
  essays: Record<string, Essay>;
}

const EssaysPage: NextPage<EssaysPageProps> = ({ essays }) => {
  return (
    <>
      {Object.entries(essays).map(([, essay]) => (
        <Box key={essay.url}>{essay.title}</Box>
      ))}
    </>
  );
};

export default EssaysPage;
