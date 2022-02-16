import SocialLogin, { Provider } from "@/components/account/SocialLogin";
import Layout from "@/components/Layout";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
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
    if (typeof router.query.provider === "string") {
      const scope =
        typeof router.query.scope === "string"
          ? router.query.scope.split(",").join(" ")
          : undefined;
      signIn(
        router.query.provider,
        typeof callbackUrl === "string" ? { callbackUrl } : {},
        scope ? { scope } : {}
      );
    } else if (router.query.error) {
      setErrors({ _: [`${router.query?.error}`] });
    }
  }, [router.query, callbackUrl]);
  useEffect(() => {
    if (session?.user && callbackUrl) router.push(callbackUrl);
  }, [session, router, callbackUrl]);
  if (router.query.provider) return <div>{"Redirecting..."}</div>;
  return (
    <Layout>
      <NextSeo
        title={"Sign in"}
        canonical={"/auth/signin"}
        description={"Sign in to your SelfBuilder account, or create a free account now."}
      />
      <Container>
        <Box m={"auto"} p={4} maxWidth={"40rem"}>
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
            <Grid
              container
              spacing={4}
              alignItems={"center"}
              justifyContent={"center"}
              height="100%"
            >
              <Grid item xs={12}>
                <Typography variant="h5" component="p">
                  You are logged in as <strong>{session.user.email}</strong>.
                </Typography>
              </Grid>
              <Grid item container xs={12} justifyContent={"center"}>
                <Button variant="outlined" color="primary" size="large" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </Grid>
            </Grid>
          )) || (
            <div id="sign-in">
              <Typography
                variant="h1"
                className="page-title text-center"
                style={{ margin: "1rem" }}
              >
                Sign in
              </Typography>
              <SocialLogin
                providers={providers}
                callbackUrl={callbackUrl ?? "/"}
                onError={setErrors}
              />
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
