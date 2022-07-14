import { useAuth } from "@/components/contexts/AuthContext";
import Layout from "@/components/Layout";
import { Box, Container, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { NextSeo } from "next-seo";
import React, { FunctionComponent, useEffect } from "react";

const SignOut: FunctionComponent = () => {
  const { token } = useAuth();
  useEffect(() => {
    if (token) signOut();
  }, [token]);
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
