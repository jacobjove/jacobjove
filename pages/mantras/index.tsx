import SelectableMantra from "@/components/data/mantras/SelectableMantra";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Mantra from "@/graphql/generated/types/Mantra";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface MantrasPageProps {
  mantras: Mantra[];
  selectedMantraIds: string[];
}

const QUERY = gql`
  query Mantras {
    mantras {
      id
      content
    }
  }
`;

const MantrasPage: NextPage<MantrasPageProps> = ({
  mantras,
  selectedMantraIds,
}: MantrasPageProps) => {
  const mantrasByLetters: Record<string, typeof mantras> = {};
  mantras.map((mantra) => {
    const firstLetter = mantra.content[0].toUpperCase();
    mantrasByLetters[firstLetter] = mantrasByLetters[firstLetter] || [];
    mantrasByLetters[firstLetter].push(mantra);
  });
  return (
    <Layout>
      <NextSeo title={"Mantras"} canonical={"/mantras"} description={"Browse mantras."} />
      <Container>
        <PageHeader>Mantras</PageHeader>
        <div style={{ margin: "2rem", textAlign: "center" }}>
          {Object.keys(mantrasByLetters).map((key) => (
            <React.Fragment key={key}>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {mantrasByLetters[key].map((mantra) => (
                <SelectableMantra
                  key={mantra.content}
                  mantra={mantra}
                  selected={selectedMantraIds.includes(mantra.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default MantrasPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/mantras",
  query: {
    query: QUERY,
  },
});
