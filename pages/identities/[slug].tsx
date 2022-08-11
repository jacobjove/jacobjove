import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Identity } from "@/generated/models";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";

interface IdentityProps {
  identity: Identity;
}

/**
 * A page that renders the HTML of a single identity.
 */
const IdentityDetailPage: FC<IdentityProps> = ({ identity }: IdentityProps) => {
  return (
    <Layout>
      <NextSeo title={identity.name} canonical={`/`} description={`${identity.description}`} />
      <Container>
        <PageHeader>{identity.name}</PageHeader>
        {identity.description && <p dangerouslySetInnerHTML={{ __html: identity.description }} />}
      </Container>
    </Layout>
  );
};
export default IdentityDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  throw new Error("Not implemented");
  // let identity: Identity | null = null;
  // let notFound = false;
  // const { slug } = params || {};
  // await prisma.identity
  //   .findUnique({ where: { slug: `${slug}` } })
  //   .then((result) => {
  //     identity = result;
  //   })
  //   .catch(() => {
  //     notFound = true;
  //   });
  // return {
  //   props: {
  //     identity,
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
