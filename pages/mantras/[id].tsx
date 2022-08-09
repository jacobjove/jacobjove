import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Mantra } from "@/graphql/generated/models/mantra.model";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface MantraProps {
  mantra: Mantra;
}

/**
 * A page that renders the HTML of a single mantra.
 */
const MantraDetailPage: FC<MantraProps> = ({ mantra }: MantraProps) => {
  return (
    <Layout>
      <NextSeo
        title={mantra.content}
        canonical={`/${mantra.id}`}
        description={`${mantra.content}`}
      />
      <Container>
        <PageHeader>{mantra.content}</PageHeader>
        {mantra.content && <p dangerouslySetInnerHTML={{ __html: mantra.content }} />}
      </Container>
    </Layout>
  );
};
export default MantraDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  throw new Error("Not implemented");
  // let mantra: Mantra | null = null;
  // let notFound = false;
  // const { id } = params || {};
  // await prisma.mantra
  //   .findUnique({ where: { id: `${id}` } })
  //   .then((result) => {
  //     mantra = result;
  //   })
  //   .catch(() => {
  //     notFound = true;
  //   });
  // return {
  //   props: {
  //     mantra,
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
