import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";
import Box from "@mui/material/Box";
import { getMessages } from "@utils/i18n";
import { useTranslation } from "next-i18next";

const PROJECTS: [string, string, string, string[]][] = [
  [
    "SelfBuilder",
    "https://selfbuilder.orega.org/",
    "SelfBuilder is a web app that helps you manage your time, build habits, and achieve your personal goals.",
    ["Next.js", "React", "TypeScript", "MongoDB", "Docker"],
  ],
  [
    "ModularHistory",
    "https://modularhistory.orega.org/",
    "ModularHistory is a web app that organizes information about the history of humanity.",
    ["Next.js", "React", "TypeScript", "Postgres", "Elasticsearch", "Docker"],
  ],
  [
    "KW Striping",
    "https://kwstriping.com/",
    "KW Striping is the web app used by KW Striping (a small Utah business) to accept service requests from customers.",
    ["Django", "Python", "TypeScript", "Postgres", "Docker"],
  ],
];

export default function Projects() {
  const { t } = useTranslation("projects");
  return (
    <Layout maxWidth="sm">
      <PageHeader>{t("title")}</PageHeader>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography textAlign={"center"} flexBasis={"100%"}>
          {t("lead")}
        </Typography>
        <div>
          {PROJECTS.map(([name, url, description, technologies]) => (
            <Box key={name} my={4}>
              <Typography variant={"h2"} mb={"0.25rem"}>
                <a href={url} target={"_blank"} rel="noreferrer">
                  {name}
                </a>
              </Typography>
              <Typography component={"p"} variant={"body2"}>
                {description}
              </Typography>
              <Typography fontSize={"0.9rem"} fontStyle={"italic"} mt={1}>
                {technologies.join(", ")}
              </Typography>
            </Box>
          ))}
        </div>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale, ["projects"]);
  return {
    props: { ...messages },
  };
};