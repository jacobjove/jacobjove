import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Act } from "@/graphql/schema";
import prisma from "@/lib/prisma";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface ActionProps {
  act: Act;
}

/**
 * A page that renders the HTML of a single action.
 */
const ActionDetailPage: FC<ActionProps> = ({ act }: ActionProps) => {
  return (
    <Layout>
      <NextSeo title={act.name} canonical={`/${act.slug}`} description={`${act.description}`} />
      <Container>
        <PageHeader>{act.name}</PageHeader>
        {act.description && <p dangerouslySetInnerHTML={{ __html: act.description }} />}
      </Container>
    </Layout>
  );
};
export default ActionDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let action: Act | null = null;
  let notFound = false;
  const { slug } = params || {};
  await prisma.act
    .findUnique({ where: { slug: `${slug}` } })
    .then((result) => {
      action = result;
    })
    .catch(() => {
      notFound = true;
    });
  return {
    props: {
      action,
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
