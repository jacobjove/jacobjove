import Typography from '@mui/material/Typography';
import * as m from '@paraglide/messages.js';
import PageHeader from '@components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader>{m.about_title()}</PageHeader>
      <Typography textAlign="center">{'Coming soon.'}</Typography>
    </>
  );
}
