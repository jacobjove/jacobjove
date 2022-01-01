import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

interface DefaultPageProps {
  date: string;
  ctaHref: string;
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  // const currentDate = props.date;
  return (
    <Layout>
      <NextSeo title={"SelfBuilder"} canonical={"/"} description={"Be your best self."} />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Box>
              <Typography variant={"h1"}>Be your best self.</Typography>
            </Box>
            <Box marginTop="2rem">
              <Link href={props.ctaHref} passHref>
                <Button variant={"contained"} color={"primary"}>
                  {props.ctaHref === "/app/dashboard" ? "Go to dashboard" : "Sign up"}
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default DefaultPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const today = new Date();
  const props: DefaultPageProps = {
    date: today.toISOString(),
    ctaHref: session?.user?.email ? "/app/dashboard" : "/auth/registration",
  };
  return { props };
};
