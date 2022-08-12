import SelectableBelief from "@/components/data/beliefs/SelectableBelief";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Belief } from "@/graphql/generated/models/belief.model";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface BeliefsPageProps {
  beliefs: Belief[];
  selectedBeliefIds: string[];
}

const QUERY = gql`
  query Beliefs {
    beliefs {
      id
      name
      slug
    }
  }
`;

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
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/beliefs",
  query: {
    query: QUERY,
  },
});
