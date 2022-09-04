import { Box, Container, Typography } from "@mui/material";
import Layout from "@web/components/Layout";
import { signOut, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import React, { FunctionComponent, useEffect } from "react";

const SignOut: FunctionComponent = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) signOut();
  }, [session]);
  return (
    <Layout>
      <NextSeo title={"Sign out"} noindex />
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
