import AppLayout from "@/components/AppLayout";
import NoteViewer from "@/components/data/notes/NoteViewer";
import { noteFragment } from "@/graphql/generated/fragments/note.fragment";
import Note from "@/graphql/generated/types/Note";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface NotePageProps {
  noteId: string;
  session: Session | null;
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
  const { data: session } = useSession({ required: true });
  const {
    data,
    loading: _loadingNote,
    error: _error,
  } = useQuery<NotePageData>(QUERY, {
    variables: { noteId },
  });
  const note = data?.note;
  if (!session || !note) return null;
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
