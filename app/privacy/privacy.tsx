'use client';

import Typography from '@mui/material/Typography';
import * as m from '@paraglide/messages';
import PageHeader from '@app/components/PageHeader';

export default function Privacy() {
  return (
    <>
      <PageHeader>{m.privacy_title()}</PageHeader>
      <Typography textAlign="center">{'Coming soon.'}</Typography>
    </>
  );
}
