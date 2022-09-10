import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SocialLogin from "@web/components/account/SocialLogin";
import Layout from "@web/components/Layout";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import { GetServerSideProps } from "next";
import { getProviders, signOut, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

interface RegistrationPageProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const RegistrationPage: FunctionComponent<RegistrationPageProps> = ({
  providers,
}: RegistrationPageProps) => {
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
        title={"Create an account"}
        canonical={"/auth/signin"}
        description={"Create a free SelfBuilder account."}
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
          {(session && (
            <Paper className="p-4 text-center">
              <Typography variant="h5" component="p">
                You are logged in as <strong>{session.user.email}</strong>.
              </Typography>
              <br />
              <Button variant="outlined" color="primary" size="large" onClick={() => signOut()}>
                {"Sign out"}
              </Button>
            </Paper>
          )) || (
            <div id="sign-in">
              <Typography variant="h1" textAlign={"center"} my={2}>
                {"Create an account"}
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

export default RegistrationPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  props: async () => {
    return { providers: await getProviders() };
  },
});
