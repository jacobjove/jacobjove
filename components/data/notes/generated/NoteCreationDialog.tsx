import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/note.fields";
import { NoteFragment } from "@/graphql/generated/fragments/note.fragment";
import { useCreateNote, useNoteDataReducer } from "@/graphql/generated/hooks/note.hooks";
import { NoteCreationInput } from "@/graphql/generated/inputs/note.inputs";
import { Note } from "@/graphql/generated/models/note.model";
import { getOptimisticResponseForNoteCreation } from "@/graphql/generated/mutations/note.mutations";
import { bindPopover } from "material-ui-popup-state/hooks";

export type NoteCreationDialogProps = ReturnType<typeof bindPopover>;

export default function NoteCreationDialog(props: NoteCreationDialogProps) {
  const [create] = useCreateNote();
  const dataTuple = useNoteDataReducer();
  return CreationDialog<Note, NoteCreationInput, { createNote: NoteFragment }>({
    typeName: "note",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForNoteCreation,
    ...props,
  });
}
