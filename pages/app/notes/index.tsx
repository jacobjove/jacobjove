import AppLayout from "@/components/AppLayout";
import DeviceContext from "@/components/contexts/DeviceContext";
import { useUser } from "@/components/contexts/UserContext";
import NotesMenu from "@/components/notes/NotesMenu";
import NoteViewer from "@/components/notes/NoteViewer";
import { NoteCreationArgs } from "@/graphql/schema/generated/args/note.args";
import { noteFragment, NoteFragment } from "@/graphql/schema/generated/fragments/note.fragment";
import { Note } from "@/graphql/schema/generated/models/note.model";
import {
  CREATE_NOTE,
  getOptimisticResponseForNoteCreation,
  updateCacheAfterCreatingNote,
} from "@/graphql/schema/generated/mutations/note.mutations";
import { ID } from "@/graphql/schema/types";
import { useHandleMutation } from "@/utils/data";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
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
  const [createNote, { loading: loadingCreateNote }] = useHandleMutation<
    { createNote: NoteFragment },
    NoteCreationArgs
  >(CREATE_NOTE, updateCacheAfterCreatingNote);

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
