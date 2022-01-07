import SelectableAction from "@/components/actions/SelectableAction";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Action, UserAction } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import React from "react";

interface ActionsPageProps {
  actions: Action[];
  selectedActionIds: number[];
}

const ActionsPage: NextPage<ActionsPageProps> = ({
  actions,
  selectedActionIds,
}: ActionsPageProps) => {
  const actionsByLetters: Record<string, typeof actions> = {};
  actions.map((action) => {
    const firstLetter = action.name[0].toUpperCase();
    actionsByLetters[firstLetter] = actionsByLetters[firstLetter] || [];
    actionsByLetters[firstLetter].push(action);
  });
  return (
    <Layout>
      <NextSeo title={"Actions"} canonical={"/actions"} description={"Browse actions."} />
      <Container>
        <PageHeader>Actions</PageHeader>
        <div style={{ margin: "2rem", textAlign: "center" }}>
          {Object.keys(actionsByLetters).map((key) => (
            <React.Fragment key={key}>
              <Divider sx={{ my: 2 }}>{key}</Divider>
              {actionsByLetters[key].map((action) => (
                <SelectableAction
                  key={action.name}
                  action={action}
                  selected={selectedActionIds.includes(action.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ActionsPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const apolloClient = initializeApollo();
  const props: ActionsPageProps = {
    actions: [],
    selectedActionIds: [],
  };
  if (session?.user?.id) {
    const { data } = await apolloClient.query({
      query: gql`
        query Actions {
          actions {
            id
            name
            slug
          }
          userActions (
            where: {
              userId: {
                equals: "${session.user.id}"
              }
            }
          ) {
            actionId
          }
        }
      `,
    });
    props.actions = data.actions;
    if (data?.userActions?.length) {
      props.selectedActionIds = data.userActions.map((userAction: UserAction) =>
        parseInt(`${userAction.actionId}`)
      );
    }
  }
  return addApolloState(apolloClient, { props });
};
