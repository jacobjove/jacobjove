import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";
import Box from "@mui/material/Box";

const PROJECTS: [string, string][] = [
  ["SelfBuilder", "https://selfbuilder.orega.org/"],
  ["ModularHistory", "https://modularhistory.orega.org/"],
  ["KW Striping", "https://kwstriping.com/"],
];

export default function Projects() {
  return (
    <Layout maxWidth="sm">
      <PageHeader>{"Projects"}</PageHeader>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography textAlign={"center"} flexBasis={"100%"}>
          {"Here are a few apps I've built and/or am in the process of building:"}
        </Typography>
        <ul>
          {PROJECTS.map(([name, url]) => (
            <li key={name}>
              <Typography component="a" href={url} target={"_blank"}>
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    props: { messages },
  };
};
