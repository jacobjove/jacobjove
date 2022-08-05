import SelectableIdentity from "@/components/identities/SelectableIdentity";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Identity } from "@/graphql/schema/generated/models";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface IdentitiesPageProps {
  identities: Identity[];
  selectedIdentityIds: string[];
}

const QUERY = gql`
  query Identities {
    identities {
      id
      name
      slug
    }
  }
`;

const IdentitiesPage: NextPage<IdentitiesPageProps> = ({
  identities,
  selectedIdentityIds,
}: IdentitiesPageProps) => {
  const identitiesByLetters: Record<string, typeof identities> = {};
  identities.map((identity) => {
    const firstLetter = identity.name[0].toUpperCase();
    identitiesByLetters[firstLetter] = identitiesByLetters[firstLetter] || [];
    identitiesByLetters[firstLetter].push(identity);
  });
  return (
    <Layout>
      <NextSeo title={"Identities"} canonical={"/identities"} description={"Browse identities."} />
      <Container>
        <PageHeader>Identities</PageHeader>
        <div style={{ margin: "2rem", textAlign: "center" }}>
          {Object.keys(identitiesByLetters).map((key) => (
            <React.Fragment key={key}>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {identitiesByLetters[key].map((identity) => (
                <SelectableIdentity
                  key={identity.name}
                  identity={identity}
                  selected={selectedIdentityIds.includes(identity.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default IdentitiesPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/identities",
  query: {
    query: QUERY,
  },
});
