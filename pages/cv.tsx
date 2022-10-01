import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";
import Box from "@mui/material/Box";
import { getMessages } from "@utils/i18n";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobfredericksen/";

export default function CV() {
  return (
    <Layout>
      <PageHeader>{"CV"}</PageHeader>
      <Box textAlign={"center"}>
        <Typography>{"I'll add a copy of my resume here soon."}</Typography>
        <Typography>{"In the meantime, take a look at my LinkedIn profile:"}</Typography>
        <Typography>
          <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer">
            {LINKEDIN_PROFILE_URL}
          </a>
        </Typography>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale);
  return {
    props: { messages },
  };
};
