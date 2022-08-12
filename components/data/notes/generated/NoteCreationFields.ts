import CreationFields from "@/components/data/CreationFields";
import { NoteFragment } from "@/graphql/generated/fragments/note.fragment";
import { NoteCreationInput } from "@/graphql/generated/inputs/note.inputs";
import { Note } from "@/graphql/generated/models/note.model";

interface NoteCreationFieldsProps {
  dataTuple: [NoteCreationInput, Dispatch<Payload<NoteCreationInput>>];
}

export default function NoteCreationFields(props: NoteCreationFieldsProps) {
  return CreationFields<Note, NoteCreationInput, { createNote: NoteFragment }>({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
        required: false,
      },
    ],
    ...props,
  });
}
