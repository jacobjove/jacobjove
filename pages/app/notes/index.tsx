import AppLayout from "@/components/AppLayout";
import { useDeviceData } from "@/components/contexts/DeviceContext";
import { useUser } from "@/components/contexts/UserContext";
import NotesMenu from "@/components/data/notes/NotesMenu";
import NoteViewer from "@/components/data/notes/NoteViewer";
import { noteFragment } from "@/graphql/generated/fragments/note.fragment";
import { useCreateNote } from "@/graphql/generated/hooks/note.hooks";
import { getOptimisticResponseForNoteCreation } from "@/graphql/generated/mutations/note.mutations";
import { Note } from "@/graphql/generated/types/note.type";
import { ID } from "@/graphql/schema/types";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { NextSeo } from "next-seo";
import { useState } from "react";

interface NotesPageProps {
  session: Session | null;
}

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
  const { user } = useUser();
  const { isMobile } = useDeviceData();
  // const notebooks = user?.notebooks;
  const { data, loading: loadingNotes, error } = useQuery<NotesPageData>(QUERY);
  const _notebooks = user?.notebooks ?? [];
  const { notes: _notes } = data ?? {};
  const notebooks = _notebooks?.filter((notebook) => !notebook.archivedAt);
  const [selectedNotebookId, setSelectedNotebookId] = useState<string | null>(null);
  const selectedNotebook = notebooks?.find((nb) => nb.id === selectedNotebookId);
  const notes = data?.notes?.filter((note) => note.notebookId === selectedNotebookId);
  const [_selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);
  const selectedNoteId = selectedNoteIds[0];
  const selectedNote = notes?.find((note) => note.id === selectedNoteId);
  const [createNote, { loading: loadingCreateNote }] = useCreateNote();

  const loading = loadingNotes || loadingCreateNote;

  const handleCreateNote = async () => {
    const userId = user?.id as ID;
    const title = "Untitled note";
    const body = "";
    if (!notebooks?.[0]?.id) {
      console.error("No notebooks found.");
      return;
    }
    const notebookId = selectedNotebook?.id || notebooks[0].id; // TODO
    const tmpId = "tmp-id";
    const data = {
      title,
      body,
      notebookId,
      userId,
    };
    const optimisticResponse = getOptimisticResponseForNoteCreation(data);
    const fetchResult = createNote.current?.({
      variables: { data },
      optimisticResponse,
    });
    setSelectedNoteIds([tmpId]);
    const newNoteId = (await fetchResult)?.data?.createNote?.id;
    newNoteId && setSelectedNoteId(newNoteId);
  };

  return (
    <AppLayout>
      <NextSeo
        title={"Notes"}
        canonical={"/app/notes"}
        description={"Write some notes."}
        noindex
        nofollow
      />
      <Box position="relative" display="flex" height="100%">
        <NotesMenu
          data={{
            notes: notes ?? [],
            notebooks: notebooks ?? [],
          }}
          loading={loading}
          error={error}
          selectedNotebook={selectedNotebook}
          setSelectedNotebookId={setSelectedNotebookId}
          selectedNote={selectedNote}
          selectedNoteIdsState={[selectedNoteIds, setSelectedNoteIds]}
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
                }}
              >
                {selectedNote ? (
                  <NoteViewer note={selectedNote} />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
    </AppLayout>
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
