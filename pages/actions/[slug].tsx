import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ActionTemplate } from "@/graphql/schema";
import prisma from "@/lib/prisma";
import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface ActionProps {
  actionTemplate: ActionTemplate;
}

/**
 * A page that renders the HTML of a single action.
 */
const ActionDetailPage: FC<ActionProps> = ({ actionTemplate }: ActionProps) => {
  return (
    <Layout>
      <NextSeo
        title={actionTemplate.name}
        canonical={`/${actionTemplate.slug}`}
        description={`${actionTemplate.description}`}
      />
      <Container>
        <PageHeader>{actionTemplate.name}</PageHeader>
        {actionTemplate.description && (
          <p dangerouslySetInnerHTML={{ __html: actionTemplate.description }} />
        )}
      </Container>
    </Layout>
  );
};
export default ActionDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let action: ActionTemplate | null = null;
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
