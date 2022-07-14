import DeviceContext from "@/components/contexts/DeviceContext";
import { useUser } from "@/components/contexts/UserContext";
import Layout from "@/components/Layout";
import NotesMenu from "@/components/notes/NotesMenu";
import NoteViewer from "@/components/notes/NoteViewer";
import { noteFragment } from "@/graphql/fragments";
import { Note } from "@/graphql/schema";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useMutation, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { NextSeo } from "next-seo";
import { useContext, useState } from "react";

interface NotesPageProps {
  session: Session | null;
}

const CREATE_NOTE = gql`
  mutation CreateNote($data: NoteCreateInput!) {
    createNote(data: $data) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

const UPDATE_NOTE = gql`
  mutation UpdateNote($noteId: String!, $data: NoteUpdateInput!) {
    updateNote(where: { id: $noteId }, data: $data) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

const QUERY = gql`
  query GetNotes {
    notes {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

interface NotesPageData {
  notes: Note[];
}

const NotesPage: NextPage<NotesPageProps> = (_props: NotesPageProps) => {
  const user = useUser();
  const { isMobile } = useContext(DeviceContext);
  const notebooks = user?.notebooks;
  console.log("Querying for notes by", user?.name);
  const { data, loading: loadingNotes, error } = useQuery<NotesPageData>(QUERY);
  const [selectedNotebookId, setSelectedNotebookId] = useState<string | null>(null);
  const selectedNotebook = notebooks?.find((nb) => nb.id === selectedNotebookId);
  const notes = data?.notes?.filter((note) => note.notebookId === selectedNotebookId);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const selectedNote = notes?.find((note) => note.id === selectedNoteId);
  const [createNote, { loading: loadingCreateNote }] = useMutation<{
    createNote: Note;
  }>(CREATE_NOTE, {
    update(cache, { data }) {
      const { createNote } = data || {};
      if (createNote) {
        cache.modify({
          fields: {
            notes(existingNotes = []) {
              const newNoteRef = cache.writeFragment({
                data: createNote,
                fragment: gql`
                  fragment NewNote on Note {
                    ...NoteFragment
                  }
                  ${noteFragment}
                `,
                fragmentName: "NewNote",
              });
              return [...existingNotes, newNoteRef];
            },
          },
        });
      }
    },
  });

  const loading = loadingNotes || loadingCreateNote;

  if (!user) return null;

  const handleCreateNote = async () => {
    const title = "Untitled note";
    const body = "";
    const now = new Date();
    if (!user?.notebooks?.[0]?.id) {
      console.error("No notebooks found.");
      return;
    }
    const notebookId = selectedNotebook?.id || user?.notebooks[0].id; // TODO
    const tmpId = "tmp-id";
    const fetchResult = createNote({
      variables: {
        data: {
          title,
          body,
          notebook: { connect: { id: notebookId } },
        },
      },
      optimisticResponse: {
        createNote: {
          title,
          body,
          isPublic: false,
          notebookId: notebookId,
          createdAt: now,
          updatedAt: now,
          archivedAt: null,
          __typename: "Note",
          id: tmpId,
        },
      },
    }).catch((error) => {
      console.error(error);
    });
    setSelectedNoteId(tmpId);
    const newNoteId = (await fetchResult)?.data?.createNote?.id;
    newNoteId && setSelectedNoteId(newNoteId);
  };

  return (
    <Layout>
      <NextSeo
        title={"Notes"}
        canonical={"/app/notes"}
        description={"Write some notes."}
        noindex
        nofollow
      />
      <Box position="relative" display="flex" height="100%">
        <NotesMenu
          notes={data?.notes}
          loading={loading}
          error={error}
          selectedNotebook={selectedNotebook}
          setSelectedNotebookId={setSelectedNotebookId}
          selectedNote={selectedNote}
          setSelectedNoteId={setSelectedNoteId}
          handleCreateNote={handleCreateNote}
        />
        {!isMobile && (
          <>
            {!notebooks?.length ? (
              <Box
                height="100%"
                flexGrow={1}
                display="flex"
                alignItems="center"
                justifyContent={"center"}
              >
                <Typography variant="h5" textAlign="center" justifyContent={"center"}>
                  {loading ? "Loading..." : "Creating default notebook..."}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  maxHeight: "100%",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                {selectedNote ? (
                  <NoteViewer note={selectedNote} />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    {"Select a note from the menu, or"}
                    &nbsp;
                    <Button
                      variant="text"
                      sx={{ m: 0, p: 0, textTransform: "none", fontSize: "inherit" }}
                      onClick={handleCreateNote}
                    >
                      {"create a new one"}
                    </Button>
                    {"."}
                  </Box>
                )}
              </Box>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default NotesPage;

(NotesPage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/app/notes",
  query: {
    query: QUERY,
  },
});
