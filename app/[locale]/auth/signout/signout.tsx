import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { signOut, useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import type { FunctionComponent } from 'react';
import { useEffect } from 'react';
import Layout from '@app/client/layout';

const SignOut: FunctionComponent = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) signOut();
  }, [session]);
  return (
    <Layout>
      <NextSeo title={'Sign out'} noindex />
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          m={5}
          p={5}
          flexDirection="column"
        >
          <Typography className="text-center">Signing out...</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default SignOut;
