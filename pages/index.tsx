import Layout from "@/components/Layout";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import { Session } from "next-auth";
import { NextSeo } from "next-seo";
import Link from "next/link";

interface DefaultPageProps {
  session: Session;
}

const DefaultPage: NextPage<DefaultPageProps> = ({ session }: DefaultPageProps) => {
  // const currentDate = props.date;
  return (
    <Layout>
      <NextSeo title={"SelfBuilder"} canonical={"/"} description={"Be your best self."} />
      <Container maxWidth={"lg"} sx={{ height: "100%" }}>
        <Box
          height="100%"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Box maxWidth={"24rem"}>
            <Typography component="p" my={2}>
              {
                "SelfBuilder (currently under development) is an app designed to help you build your best self."
              }
            </Typography>
            <Typography component="p" my={2}>
              {"The app functions primarily as a daily planner, helping you to manage your time "}
              {"and build habits in order to accomplish your personal goals."}
            </Typography>
          </Box>
          <Box marginTop="2rem">
            {session?.user ? (
              <Link href={"/app/home"} passHref>
                <Button variant={"contained"} color={"primary"} sx={{ mx: 2 }}>
                  {"Go to app"}
                </Button>
              </Link>
            ) : (
              <>
                <Link href={"/auth/registration"} passHref>
                  <Button variant={"contained"} color={"primary"} sx={{ mx: 2 }}>
                    {"Sign up"}
                  </Button>
                </Link>
                {" or "}
                <Link href={"/auth/signin"} passHref>
                  <Button variant={"contained"} color={"primary"} sx={{ mx: 2 }}>
                    {"Sign in"}
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default DefaultPage;

export const getServerSideProps = buildGetServerSidePropsFunc({
  props: async (_, session) => {
    return { session };
  },
});
