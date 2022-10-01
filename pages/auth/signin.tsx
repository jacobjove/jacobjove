import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SocialLogin from "@components/auth/SocialLogin";
import Layout from "@components/Layout";
import { GetServerSideProps } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

interface SignInPageProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
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
    if (session && callbackUrl) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);
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
              <Alert severity="error" sx={{ alignItems: "center" }}>
                {/* {Array.isArray(errors) ? errors.map((error) => <p key={error}>{error}</p>) : <p>{errors}</p>} */}
                {Object.entries(errors || {}).map(([prop, value]) => {
                  return (
                    <p className="error-message" key={prop}>
                      {"Error:"} {value}
                    </p>
                  );
                })}
              </Alert>
              <br />
            </>
          )}
          {(session?.user && (
            <Box
              height="100%"
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="p" sx={{ width: "100%" }} textAlign={"center"}>
                You are logged in as <strong>{session.user.email}</strong>.
              </Typography>
              <Box textAlign={"center"} my={2}>
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
    },
  };
};
