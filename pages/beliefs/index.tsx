import { UserBelief } from ".prisma/client";
import SelectableBelief from "@/components/beliefs/SelectableBelief";
import Layout from "@/components/Layout";
import PageHeader from "@/components/Layout/PageHeader";
import { Belief } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import React from "react";

interface BeliefsPageProps {
  beliefs: Belief[];
  selectedBeliefIds: number[];
}

const BeliefsPage: NextPage<BeliefsPageProps> = ({
  beliefs,
  selectedBeliefIds,
}: BeliefsPageProps) => {
  const beliefsByLetters: Record<string, typeof beliefs> = {};
  beliefs.map((belief) => {
    const firstLetter = belief.name[0].toUpperCase();
    beliefsByLetters[firstLetter] = beliefsByLetters[firstLetter] || [];
    beliefsByLetters[firstLetter].push(belief);
  });
  return (
    <Layout>
      <NextSeo title={"Beliefs"} canonical={"/beliefs"} description={"Browse beliefs."} />
      <Container>
        <PageHeader>Beliefs</PageHeader>
        <div style={{ margin: "2rem", textAlign: "center" }}>
          {Object.keys(beliefsByLetters).map((key) => (
            <React.Fragment key={key}>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {beliefsByLetters[key].map((belief) => (
                <SelectableBelief
                  key={belief.name}
                  belief={belief}
                  selected={selectedBeliefIds.includes(belief.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default BeliefsPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const apolloClient = initializeApollo();
  const props: BeliefsPageProps = {
    beliefs: [],
    selectedBeliefIds: [],
  };
  if (session?.user?.id) {
    await apolloClient
      .query({
        query: gql`
        query Beliefs {
          beliefs {
            id
            name
            slug
          }
          userBeliefs (
            where: {
              userId: {equals: "${session.user.id}"}
              deleted: {equals: null}
            }
          ) {
            belief {
              id
            }
          }
        }
      `,
      })
      .then((res) => {
        props.beliefs = res.data.beliefs;
        if (res.data.userBeliefs.length) {
          props.selectedBeliefIds = res.data.userBeliefs.map(
            (userBelief: UserBelief & { belief: Belief }) => parseInt(`${userBelief.belief.id}`)
          );
        }
      });
  }
  return addApolloState(apolloClient, { props });
};
