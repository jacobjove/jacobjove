import Layout from "../components/layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";

const PROJECTS: [string, string][] = [
  ["SelfBuilder", "https://selfbuilder.orega.org/"],
  ["ModularHistory", "https://modularhistory.orega.org/"],
  ["KW Striping", "https://kwstriping.com/"],
];

export default function Projects() {
  return (
    <Layout>
      <Typography variant="h1">{"Projects"}</Typography>
      <div>
        <Typography>{"Here are a few apps I've built:"}</Typography>
        <ul>
          {PROJECTS.map(([name, url]) => (
            <li key={name}>
              <Typography component="a" href={url} target={"_blank"}>
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
