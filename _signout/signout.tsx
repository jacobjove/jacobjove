'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { signOut, useSession } from 'next-auth/react';
import type { FunctionComponent } from 'react';
import { Suspense, useEffect } from 'react';
import Layout from '@app/client/layout';

const SignOut: FunctionComponent = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) signOut();
  }, [session]);
  return (
    <Layout>
      {/* <NextSeo title={'Sign out'} noindex /> */}
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

const SignOutPage: FunctionComponent = () => {
  return (
    <Suspense>
      <SignOut />
    </Suspense>
  );
};

export default SignOutPage;
