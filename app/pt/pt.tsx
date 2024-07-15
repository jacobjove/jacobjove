'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageHeader from '@app/components/PageHeader';

interface DataItem {
  url: string;
  name: string;
}

interface PTPageProps {
  data: DataItem[];
}

export default function PT(_props: PTPageProps) {
  return (
    <>
      <PageHeader>{'Personal Training & Nutrition Coaching'}</PageHeader>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <Typography>
          Jacob is a Certified Personal Trainer and Certified Nutrition Coach.
        </Typography>
      </Box>
    </>
  );
}
