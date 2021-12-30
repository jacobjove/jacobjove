import { UserIdentity } from ".prisma/client";
import SelectableIdentity from "@/components/identities/SelectableIdentity";
import Layout from "@/components/Layout";
import PageHeader from "@/components/Layout/PageHeader";
import { Identity } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import React from "react";

interface IdentitiesPageProps {
  identities: Identity[];
  selectedIdentityIds: number[];
}

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const apolloClient = initializeApollo();
  const props: IdentitiesPageProps = {
    identities: [],
    selectedIdentityIds: [],
  };
  if (session?.user?.id) {
    await apolloClient
      .query({
        query: gql`
        query Identities {
          identities {
            id
            name
            slug
          }
          identitySelections (
            where: {
              userId: {equals: "${session.user.id}"}
              deleted: {equals: null}
            }
          ) {
            identity {
              id
            }
          }
        }
      `,
      })
      .then((res) => {
        props.identities = res.data.identities;
        if (res.data.identitySelections.length) {
          props.selectedIdentityIds = res.data.identitySelections.map(
            (identitySelection: UserIdentity & { identity: Identity }) =>
              parseInt(`${identitySelection.identity.id}`)
          );
        }
      });
  }
  return addApolloState(apolloClient, { props });
};
