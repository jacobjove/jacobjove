import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Value } from "@/graphql/schema";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";

interface ValueProps {
  value: Value;
}

/**
 * A page that renders the HTML of a single value.
 */
const ValueDetailPage: FC<ValueProps> = ({ value }: ValueProps) => {
  return (
    <Layout>
      <NextSeo
        title={value.name}
        canonical={`/${value.slug}`}
        description={`${value.description}`}
      />
      <Container>
        <PageHeader>{value.name}</PageHeader>
        {value.description && <p dangerouslySetInnerHTML={{ __html: value.description }} />}
      </Container>
    </Layout>
  );
};
export default ValueDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  throw new Error("Not implemented");
  // let value: Value | null = null;
  // let notFound = false;
  // const { slug } = params || {};
  // await prisma.value
  //   .findUnique({ where: { slug: `${slug}` } })
  //   .then((result) => {
  //     value = result;
  //   })
  //   .catch(() => {
  //     notFound = true;
  //   });
  // return {
  //   props: {
  //     value,
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
