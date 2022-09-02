import { INTRODUCTORY_PARAGRAPHS } from "@/common/constants/content";
import Layout from "@/components/Layout";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

interface DefaultPageProps {
  session: Session | null;
}

const DefaultPage: NextPage<DefaultPageProps> = (_props: DefaultPageProps) => {
  const { data: session } = useSession();
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
            {INTRODUCTORY_PARAGRAPHS.map((paragraph, index) => (
              <Typography key={index} component="p" my={2}>
                {paragraph}
              </Typography>
            ))}
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
