import { UserValue } from ".prisma/client";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SelectableValue from "@/components/values/SelectableValue";
import { Value } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import React from "react";

interface ValuesPageProps {
  values: Value[];
  selectedValueIds: number[];
}

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const apolloClient = initializeApollo();
  const props: ValuesPageProps = {
    values: [],
    selectedValueIds: [],
  };
  if (session?.user?.id) {
    await apolloClient
      .query({
        query: gql`
        query Values {
          values {
            id
            name
            slug
          }
          userValues (
            where: {
              userId: {equals: "${session.user.id}"}
              deletedAt: {equals: null}
            }
          ) {
            value {
              id
            }
          }
        }
      `,
      })
      .then((res) => {
        props.values = res.data.values;
        if (res.data.userValues.length) {
          props.selectedValueIds = res.data.userValues.map(
            (userValue: UserValue & { value: Value }) => parseInt(`${userValue.value.id}`)
          );
        }
      })
      .catch((err) => {
        console.error(err.networkError?.result?.errors);
      });
  }
  return addApolloState(apolloClient, { props });
};
