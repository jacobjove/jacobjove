import { INTRODUCTORY_PARAGRAPHS } from "@common/constants/content";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "@web/components/Layout";
import { PageProps } from "@web/types/page";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const DefaultPage: NextPage<PageProps> = () => {
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
          <Box maxWidth={"26rem"} px={2}>
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

export const getServerSideProps = buildGetServerSidePropsFunc({});
