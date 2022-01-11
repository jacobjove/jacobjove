import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Action } from "@/graphql/schema";
import prisma from "@/lib/prisma";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface ActionProps {
  action: Action;
}

/**
 * A page that renders the HTML of a single action.
 */
const HabitDetailPage: FC<ActionProps> = ({ action }: ActionProps) => {
  return (
    <Layout>
      <NextSeo
        title={action.name}
        canonical={`/${action.slug}`}
        description={`${action.description}`}
      />
      <Container>
        <PageHeader>{action.name}</PageHeader>
        {action.description && <p dangerouslySetInnerHTML={{ __html: action.description }} />}
      </Container>
    </Layout>
  );
};
export default HabitDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let action: Action | null = null;
  let notFound = false;
  const { slug } = params || {};
  await prisma.actionTemplate
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
