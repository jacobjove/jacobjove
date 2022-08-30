import FullScreenExpandableComponent from "@/components/fullscreen/FullScreenExpandableComponent";
import FullScreenToggleToolbar from "@/components/fullscreen/FullScreenToggleToolbar";
import { useNoteReducer, useUpdateNote } from "@/graphql/generated/hooks/note.hooks";
import Note from "@/graphql/generated/types/Note";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import Toolbar from "@mui/material/Toolbar";
import { FC, useEffect, useState } from "react";

interface NoteViewerProps {
  note: Note;
}

const NoteViewer: FC<NoteViewerProps> = ({ note }: NoteViewerProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  const [noteData, dispatchNoteData] = useNoteReducer(note);

  const [handleUpdateNote] = useUpdateNote();

  useEffect(() => {
    note && dispatchNoteData({ field: "init", value: note });
  }, [note, dispatchNoteData]);

  console.log("Rendering note viewer...");

  return (
    <FullScreenExpandableComponent
      fullScreenState={[fullScreen, setFullScreen]}
      sx={{
        height: "100%",
      }}
    >
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
        <FullScreenToggleToolbar fullScreenState={[fullScreen, setFullScreen]}>
          {/* {"more"} */}
        </FullScreenToggleToolbar>
        <Box flexGrow={1} flexShrink={0}>
          <TextField
            fullWidth
            variant="filled"
            sx={{
              "& input": {
                fontSize: "1.5rem",
              },
              "& .MuiFilledInput-root": {
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
              },
            }}
            value={noteData.title}
            onChange={(event) => {
              dispatchNoteData({ field: "title", value: event.target.value });
              handleUpdateNote.current?.({
                variables: {
                  where: { id: note.id },
                  data: {
                    title: event.target.value,
                  },
                },
              });
            }}
          />
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
            value={noteData.body}
            onChange={(event) => {
              dispatchNoteData({ field: "body", value: event.target.value });
              handleUpdateNote.current({
                variables: {
                  where: { id: note.id },
                  data: {
                    body: event.target.value,
                  },
                },
              });
            }}
          />
        </Box>
      </Paper>
    </FullScreenExpandableComponent>
  );
};

export default NoteViewer;
