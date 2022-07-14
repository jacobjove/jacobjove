import SocialLogin, { Provider } from "@/components/account/SocialLogin";
import { useAuth } from "@/components/contexts/AuthContext";
import Layout from "@/components/Layout";
import { USE_FIREBASE } from "@/config";
import { auth } from "@/utils/firebase";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GoogleAuthProvider } from "firebase/auth";
import { GetServerSideProps } from "next";
// import { getProviders, signIn, signOut } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { withAuthUser } from "next-firebase-auth";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
// TODO: https://github.com/firebase/firebaseui-web-react#firebaseauth-vs-styledfirebaseauth
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // GitHub as the only included Auth Provider.
  // You could add and configure more here!
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => {
      // Return type determines whether the redirect is handled automatically.
      console.log("make sure user exists in db");
      return true;
    },
  },
  // Terms of service url.
  tosUrl: "/tos",
  // Privacy policy url.
  privacyPolicyUrl: "/privacy",
};

interface SignInPageProps {
  providers?: Provider[];
}

const SignInPage: FunctionComponent<SignInPageProps> = ({ providers }: SignInPageProps) => {
  const router = useRouter();
  const { token } = useAuth();
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
    if (token && callbackUrl) {
      router.push(callbackUrl);
    }
  }, [token, router, callbackUrl]);
  if (router.query.provider) return <div>{"Redirecting..."}</div>;
  return (
    <Layout>
      <NextSeo
        title={"Sign in"}
        canonical={"/auth/signin"}
        description={"Sign in to your SelfBuilder account."}
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
          {(token && (
            <Box height="100%" display="flex" justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h5" component="p" textAlign={"center"}>
                You are logged in as <strong>{token.email}</strong>.
              </Typography>
              <Box>
                <Button variant="outlined" color="primary" size="large" onClick={() => signOut()}>
                  {"Sign out"}
                </Button>
              </Box>
            </Box>
          )) || (
            <div id="sign-in">
              <Typography variant="h1" textAlign={"center"} my={2}>
                {"Sign in"}
              </Typography>
              {USE_FIREBASE ? (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              ) : (
                <SocialLogin
                  providers={providers as Provider[]}
                  callbackUrl={callbackUrl ?? "/"}
                  onError={setErrors}
                />
              )}
            </div>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default withAuthUser()(SignInPage);

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc();
