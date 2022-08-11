import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SelectableValue from "@/components/values/SelectableValue";
import { Value } from "@/generated/models/value.model";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface ValuesPageProps {
  values: Value[];
  selectedValueIds: string[];
}

const QUERY = gql`
  query Values {
    values {
      id
      name
      slug
    }
  }
`;

const ValuesPage: NextPage<ValuesPageProps> = ({ values, selectedValueIds }: ValuesPageProps) => {
  const valuesByLetters: Record<string, typeof values> = {};
  values.map((value) => {
    const firstLetter = value.name[0].toUpperCase();
    valuesByLetters[firstLetter] = valuesByLetters[firstLetter] || [];
    valuesByLetters[firstLetter].push(value);
  });
  return (
    <Layout>
      <NextSeo title={"Values"} canonical={"/values"} description={"Browse values."} />
      <Container>
        <PageHeader>Values</PageHeader>
        <div style={{ margin: "2rem", textAlign: "center" }}>
          {Object.keys(valuesByLetters).map((key) => (
            <React.Fragment key={key}>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {valuesByLetters[key].map((value) => (
                <SelectableValue
                  key={value.name}
                  value={value}
                  selected={selectedValueIds.includes(value.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ValuesPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/values",
  query: {
    query: QUERY,
  },
});
