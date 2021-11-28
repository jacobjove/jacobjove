import { handleLogout } from "@/auth";
import SocialLogin, { Provider } from "@/components/account/SocialLogin";
import Layout from "@/components/Layout";
import { Alert, Box, Button, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps } from "next";
import { getProviders, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

interface SignInPageProps {
  providers: Provider[];
}

const SignInPage: FunctionComponent<SignInPageProps> = ({ providers }: SignInPageProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const callbackUrl = Array.isArray(router.query?.callbackUrl)
    ? router.query.callbackUrl[0]
    : router.query?.callbackUrl;
  useEffect(() => {
    if (router.query?.error) {
      setErrors({ _: [`${router.query?.error}`] });
    }
  }, [router.query?.error]);
  return (
    <Layout>
      <NextSeo
        title={"Sign in"}
        canonical={"/auth/signin"}
        description={"Sign in to your HabitBuilder account, or create a free account now."}
      />
      <Container>
        <Box m={"auto"} p={4} style={{ maxWidth: "40rem" }}>
          {!!Object.keys(errors).length && (
            <>
              <Alert severity="error">
                {/* {Array.isArray(errors) ? errors.map((error) => <p key={error}>{error}</p>) : <p>{errors}</p>} */}
                {Object.entries(errors || {}).map(([prop, value]) => {
                  return (
                    <p className="error-message" key={prop}>
                      {value}
                    </p>
                  );
                })}
              </Alert>
              <br />
            </>
          )}
          {(session?.user && (
            <Paper className="p-4 text-center">
              <p className="lead">
                You are logged in as <strong>{session.user.email}</strong>.
              </p>
              <br />
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => handleLogout(session)}
              >
                Sign Out
              </Button>
            </Paper>
          )) || (
            <div id="sign-in">
              <h1 className="page-title text-center" style={{ margin: "1rem" }}>
                Sign in
              </h1>
              <SocialLogin providers={providers} callbackUrl={callbackUrl} onError={setErrors} />
            </div>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default SignInPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await getProviders(),
    }, // passed to the page component as props
  };
};
