import { AuthToken, useAuth } from "@/components/contexts/AuthContext";
import Layout from "@/components/Layout";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth } from "next-auth";
import { NextSeo } from "next-seo";

interface HomePageProps {
  token: AuthToken;
}

const HomePage: NextPage<HomePageProps> = () => {
  const { token } = useAuth();
  return (
    <Layout>
      <NextSeo
        title={"Home"}
        canonical={"/app/home"}
        description={"Your personal home page."}
        noindex
        nofollow
      />
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box textAlign={"center"}>
          <Typography flexBasis={"100%"} my={2}>{`Welcome, ${token?.displayName}!`}</Typography>
          {/* <Link href="/app/dashboard" passHref>
            <Button variant="contained" component="a">
              Go to dashboard
            </Button>
          </Link> */}
        </Box>
      </Container>
    </Layout>
  );
};
export default HomePage;

(HomePage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/app/home",
});
