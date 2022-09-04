import { Container } from "@mui/material";
import Layout from "@web/components/Layout";
import PageHeader from "@web/components/PageHeader";
import Belief from "@web/graphql/generated/types/Belief";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";

interface BeliefProps {
  belief: Belief;
}

/**
 * A page that renders the HTML of a single belief.
 */
const BeliefDetailPage: FC<BeliefProps> = ({ belief }: BeliefProps) => {
  return (
    <Layout>
      <NextSeo title={belief.name} canonical={`/`} description={`${belief.description}`} />
      <Container>
        <PageHeader>{belief.name}</PageHeader>
        {belief.description && <p dangerouslySetInnerHTML={{ __html: belief.description }} />}
      </Container>
    </Layout>
  );
};
export default BeliefDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  throw new Error("Not implemented");
  // let belief: Belief | null = null;
  // let notFound = false;
  // const { slug } = params || {};
  // await prisma.belief
  //   .findUnique({ where: { slug: `${slug}` } })
  //   .then((result) => {
  //     belief = result;
  //   })
  //   .catch(() => {
  //     notFound = true;
  //   });
  // return {
  //   props: {
  //     belief,
  //   },
  //   notFound,
  //   revalidate: 10,
  // };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
