import CreationFields from "@/components/data/CreationFields";
import { ListFragment } from "@/graphql/generated/fragments/list.fragment";
import { ListCreationInput } from "@/graphql/generated/inputs/list.inputs";
import { List } from "@/graphql/generated/models/list.model";

interface ListCreationFieldsProps {
  dataTuple: [ListCreationInput, Dispatch<Payload<ListCreationInput>>];
}

export default function ListCreationFields(props: ListCreationFieldsProps) {
  return CreationFields<List, ListCreationInput, { createList: ListFragment }>({
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
        type: "Map",
        required: true,
      },
    ],
    ...props,
  });
}
