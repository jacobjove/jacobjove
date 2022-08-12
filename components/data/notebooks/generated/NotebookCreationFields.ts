import CreationFields from "@/components/data/CreationFields";
import { NotebookFragment } from "@/graphql/generated/fragments/notebook.fragment";
import { NotebookCreationInput } from "@/graphql/generated/inputs/notebook.inputs";
import { Notebook } from "@/graphql/generated/models/notebook.model";

interface NotebookCreationFieldsProps {
  dataTuple: [NotebookCreationInput, Dispatch<Payload<NotebookCreationInput>>];
}

export default function NotebookCreationFields(props: NotebookCreationFieldsProps) {
  return CreationFields<Notebook, NotebookCreationInput, { createNotebook: NotebookFragment }>({
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
