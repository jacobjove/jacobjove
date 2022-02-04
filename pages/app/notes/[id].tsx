import Layout from "@/components/Layout";
import NoteViewer from "@/components/notes/NoteViewer";
import { noteFragment } from "@/graphql/fragments";
import { Note } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface NotePageProps {
  noteId: number;
  session: Session | null;
}

const QUERY = gql`
  query GetNote($noteId: Int!) {
    note(where: { id: $noteId }) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

interface NotePageData {
  note: Note;
}

const NotePage: NextPage<NotePageProps> = (props: NotePageProps) => {
  const { noteId } = props;
  const { data: session } = useSession();
  const {
    data,
    loading: loadingNote,
    error,
  } = useQuery<NotePageData>(QUERY, {
    variables: { noteId },
  });
  const note = data?.note;

  if (!session || !note) return null;

  return (
    <Layout>
      <NextSeo
        title={"Notes"}
        canonical={`/app/notes/${note.id}`}
        description={"Write some notes."}
        noindex
        nofollow
      />
      <Box height="100%" flexGrow={1} display="flex" alignItems="center" justifyContent="center">
        <NoteViewer note={note} />
      </Box>
    </Layout>
  );
};

export default NotePage;

(NotePage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { id } = context.params || {};
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/notes/${id}`,
        permanent: false,
      },
    };
  } else if (typeof id !== "string") {
    console.error("Invalid note id");
    return {
      notFound: true,
    };
  }
  const noteId = parseInt(id);
  await apolloClient
    .query({
      query: QUERY,
      variables: {
        userId: session.user.id,
        noteId,
      },
    })
    .catch((e) => {
      if (e.networkError?.result?.errors) {
        e.networkError.result.errors.forEach(
          (error: {
            message: string;
            extensions: { code: string; exception: { stacktrace: string[] } };
          }) => {
            console.error(error.message);
            console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
          }
        );
      } else {
        console.error(e);
      }
    });
  const props = {
    session,
    noteId,
  };
  return addApolloState(apolloClient, { props });
};
