import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/graphql/generated/fields/note.fields";
import { NoteFragment } from "@web/graphql/generated/fragments/note.fragment";
import { useCreateNote, useNoteReducer } from "@web/graphql/generated/hooks/note.hooks";
import { NoteCreationInput } from "@web/graphql/generated/inputs/note.inputs";
import Note from "@web/graphql/generated/types/Note";
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
