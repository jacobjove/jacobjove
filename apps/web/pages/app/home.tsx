import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppLayout from "@web/components/AppLayout";
import { PageProps } from "@web/types/page";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth } from "next-auth";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

const HomePage: NextPage<PageProps> = () => {
  const { data: session } = useSession();
  return (
    <AppLayout>
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
          <Typography flexBasis={"100%"} my={2}>{`Welcome, ${session?.user.name}!`}</Typography>
          {/* <Link href="/app/dashboard" passHref>
            <Button variant="contained" component="a">
              Go to dashboard
            </Button>
          </Link> */}
        </Box>
      </Container>
    </AppLayout>
  );
};
export default HomePage;

(HomePage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/app/home",
});
