'use client';

import Typography from '@mui/material/Typography';
import * as m from '@paraglide/messages';
import PageHeader from '@components/PageHeader';

export default function Terms() {
  return (
    <>
      <PageHeader>{m.terms_title()}</PageHeader>
      <Typography textAlign="center">{'Coming soon.'}</Typography>
    </>
  );
}
