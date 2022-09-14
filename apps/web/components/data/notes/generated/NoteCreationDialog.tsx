import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateNote, useNoteReducer } from "@web/generated/hooks/note.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { NoteCreationInput } from "@web/graphql/generated/inputs/note.inputs";
import Note from "@web/generated/types/Note";
import { NoteFragment } from "@web/graphql/generated/fragments/note.fragment";
import fields from "@web/graphql/generated/fields/note.fields";

export type NoteCreationDialogProps = ReturnType<typeof bindPopover>;

export default function NoteCreationDialog(props: NoteCreationDialogProps) {
  const [create] = useCreateNote();
  const dataTuple = useNoteReducer();
  return CreationDialog<Note, NoteCreationInput, { createNote: NoteFragment }>({
    typeName: "note",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
