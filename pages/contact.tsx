import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Card from "@mui/material/Card";
import Image from "next/image";
import { GetStaticProps } from "next";
import { CardContent, Typography } from "@mui/material";

const NAME = "Jacob T. Fredericksen";
const EMAIL = "jacob.t.fredericksen@gmail.com";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <Card sx={{ p: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Image
              priority
              src="/images/profile.jpg"
              style={{ borderRadius: "50%" }}
              height={108}
              width={108}
              alt={NAME}
            />
            <Typography variant={"h2"} sx={{ my: 2 }}>
              {NAME}
            </Typography>
            <Typography my={1}>{"100 DuPont St., Brooklyn, NY 11222"}</Typography>
            <Typography my={1}>
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                {EMAIL}
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
