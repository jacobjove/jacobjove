import AppLayout from "@/components/AppLayout";
import { AuthToken, useAuth } from "@/components/contexts/AuthContext";
import NoteViewer from "@/components/notes/NoteViewer";
import { noteFragment } from "@/graphql/fragments";
import { Note } from "@/graphql/schema";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth } from "next-auth";
import { NextSeo } from "next-seo";

interface NotePageProps {
  noteId: string;
  token: AuthToken | null;
}

const QUERY = gql`
  query GetNote($noteId: String!) {
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
  const { token } = useAuth();
  const {
    data,
    loading: loadingNote,
    error,
  } = useQuery<NotePageData>(QUERY, {
    variables: { noteId },
  });
  const note = data?.note;

  if (!token || !note) return null;

  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default NotePage;

(NotePage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  const _getServerSideProps = buildGetServerSidePropsFunc({
    unauthedRedirectDestination: `/auth/signin?callbackUrl=/app/notes/${id}`,
  });
  return await _getServerSideProps(context);
};
