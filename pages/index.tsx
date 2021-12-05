import {
  Action,
  IdentitySelection,
  Identity,
  Calendar,
  Schedule,
  Event,
  Value,
  ValueSelection,
} from "@/prisma/generated";
import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NextSeo } from "next-seo";

interface DefaultPageProps {
  date: string;
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  // const currentDate = props.date;
  return (
    <Layout>
      <NextSeo title={"Action Builder"} canonical={"/"} description={"Be your best self."} />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Box>
              <Typography variant={"h1"}>Be your best self.</Typography>
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
  };
  // if (session?.user?.id) {
    
  // }
  return { props };
};
