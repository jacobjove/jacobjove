import { Identity } from ".prisma/client";
import Layout from "@/components/Layout";
import PageHeader from "@/components/Layout/PageHeader";
import prisma from "@/lib/prisma";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

interface IdentitiesPageProps {
  identities: Identity[];
}

const IdentitiesPage: NextPage<IdentitiesPageProps> = ({ identities }: IdentitiesPageProps) => {
  const identitiesByLetters: Record<string, typeof identities> = {};
  identities.map((identity) => {
    const firstLetter = identity.name[0].toUpperCase();
    identitiesByLetters[firstLetter] = identitiesByLetters[firstLetter] || [];
    identitiesByLetters[firstLetter].push(identity);
  });

  return (
    <Layout>
      <NextSeo
        title={"Identities"}
        canonical={"/identities"}
        description={"Browse identities."}
      />
      <Container>
        <PageHeader>Identities</PageHeader>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          {Object.keys(identitiesByLetters).map((key) => (
            <>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {identitiesByLetters[key].map((identity) => (
                <Link href={`/identities/${identity.slug}`} key={identity.name} passHref prefetch={false}>
                  <Button
                    component="a"
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "black",
                      margin: "0.6rem 1.2rem",
                      display: "inline-block",
                      fontSize: "1rem",
                      border: ".08rem solid black",
                    }}
                  >
                    {identity.name}
                  </Button>
                </Link>
              ))}
            </>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default IdentitiesPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async () => {
    return { props: { identities: await prisma.identity.findMany({
      orderBy: {
        name: 'asc',
      },}) } };
};
