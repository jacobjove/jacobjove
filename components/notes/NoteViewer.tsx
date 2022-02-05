import { noteFragment } from "@/graphql/fragments";
import { Note } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import debounce from "lodash/debounce";
import { FC, useEffect, useRef, useState } from "react";

const UPDATE_NOTE = gql`
  mutation UpdateNote($noteId: Int!, $data: NoteUpdateInput!) {
    updateNote(where: { id: $noteId }, data: $data) {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;

interface NoteViewerProps {
  note: Note;
}

const MUTATION_DEBOUNCE_DELAY = 1200; // 1.2 seconds

const NoteViewer: FC<NoteViewerProps> = ({ note }: NoteViewerProps) => {
  const [noteTitle, setNoteTitle] = useState(note?.title);
  const [noteBody, setNoteBody] = useState(note?.body);
  const [updateNote, { loading: loadingUpdateNote }] = useMutation<{
    updateNote: Note;
  }>(UPDATE_NOTE);
  useEffect(() => {
    if (note) {
      setNoteTitle(note.title);
      setNoteBody(note.body);
    }
  }, [note]);
  const abortController = useRef<AbortController>();
  const handleUpdateNote = useRef(
    debounce((...args: Parameters<typeof updateNote>) => {
      const controller = new window.AbortController();
      abortController.current = controller;
      const [mutationOptions, ...rest] = args;
      if (mutationOptions) {
        mutationOptions.context = { fetchOptions: { signal: controller.signal } };
      }
      return Promise.resolve(updateNote(mutationOptions, ...rest)).catch((error) =>
        console.error(error)
      );
    }, MUTATION_DEBOUNCE_DELAY)
  );
  const abortLatest = () => {
    if (abortController.current) {
      abortController.current.abort();
    }
  };
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: "21cm", // A4 sheet of paper
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderLeft: (theme) => `1px solid ${theme.palette.background.default}`,
        borderRight: (theme) => `1px solid ${theme.palette.background.default}`,
      }}
    >
      <Toolbar>
        <TextField
          variant="standard"
          value={noteTitle || "Untitled note"}
          onChange={(event) => {
            setNoteTitle(event.target.value);
            abortLatest();
            handleUpdateNote.current({
              variables: {
                noteId: note.id,
                data: {
                  title: { set: event.target.value },
                },
              },
            });
          }}
        />
      </Toolbar>
      <Box flexGrow={1} flexShrink={0}>
        <TextField
          fullWidth
          multiline
          variant="filled"
          placeholder="Type here..."
          sx={{
            height: "100%",
            borderBottom: "none",
            alignItems: "start",
            "& .MuiFilledInput-root": {
              alignItems: "start",
              height: "100%",
              borderBottom: "none",
              borderRadius: "1px",
            },
          }}
          value={noteBody || ""}
          onChange={(event) => {
            setNoteBody(event.target.value);
            abortLatest();
            handleUpdateNote.current({
              variables: {
                noteId: note.id,
                data: {
                  body: { set: event.target.value },
                },
              },
            });
          }}
        />
      </Box>
    </Paper>
  );
};

export default NoteViewer;
