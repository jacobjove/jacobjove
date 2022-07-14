import Layout from "@/components/Layout";
import { getAuth } from "@/utils/auth/ssr";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
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
      <Container maxWidth={"lg"} sx={{ height: "100%" }}>
        <Box height="100%" display="flex" alignItems="center" justifyContent={"center"}>
          <Box marginTop="2rem">
            <Link href={props.ctaHref} passHref>
              <Button variant={"contained"} color={"primary"}>
                {props.ctaHref === "/app/home" ? "Go to app" : "Sign up"}
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default DefaultPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = await getAuth(context);
  const today = new Date();
  const props: DefaultPageProps = {
    date: today.toISOString(),
    ctaHref: token ? "/app/home" : "/auth/registration",
  };
  return { props };
};
