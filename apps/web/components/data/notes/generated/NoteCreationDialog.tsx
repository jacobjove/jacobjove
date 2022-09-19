import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/note.fields";
import { NoteFragment } from "@web/generated/graphql/fragments/note.fragment";
import { NoteCreationInput } from "@web/generated/graphql/inputs/note.inputs";
import Note from "@web/generated/graphql/types/Note";
import { useCreateNote, useNoteReducer } from "@web/generated/hooks/note.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";

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
