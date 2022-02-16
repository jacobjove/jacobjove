import Layout from "@/components/Layout";
import { addApolloState, initializeApollo } from "@/utils/apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

interface HomePageProps {
  session: Session | null;
}

const HomePage: NextPage<HomePageProps> = (_props: HomePageProps) => {
  const { data: session } = useSession();
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
          <Typography flexBasis={"100%"} my={2}>{`Welcome, ${session?.user?.name}!`}</Typography>
          <Link href="/app/dashboard" passHref>
            <Button variant="contained" component="a">
              Go to dashboard
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};
export default HomePage;

(HomePage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/home",
        permanent: false,
      },
    };
  }
  const props: HomePageProps = { session };
  return addApolloState(apolloClient, { props });
};
