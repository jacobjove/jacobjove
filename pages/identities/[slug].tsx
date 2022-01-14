import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Identity } from "@/graphql/schema";
import prisma from "@/lib/prisma";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface IdentificationProps {
  identity: Identity;
}

/**
 * A page that renders the HTML of a single identification.
 */
const IdentificationDetailPage: FC<IdentificationProps> = ({ identity }: IdentificationProps) => {
  return (
    <Layout>
      <NextSeo
        title={identity.name}
        canonical={`/${identity.slug}`}
        description={`${identity.description}`}
      />
      <Container>
        <PageHeader>{identity.name}</PageHeader>
        {identity.description && <p dangerouslySetInnerHTML={{ __html: identity.description }} />}
      </Container>
    </Layout>
  );
};
export default IdentificationDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let identity: Identity | null = null;
  let notFound = false;
  const { slug } = params || {};
  await prisma.identity
    .findUnique({ where: { slug: `${slug}` } })
    .then((result) => {
      identity = result;
    })
    .catch(() => {
      notFound = true;
    });
  return {
    props: {
      identity,
    },
    notFound,
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
