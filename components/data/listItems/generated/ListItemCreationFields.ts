import CreationFields from "@/components/data/CreationFields";
import { ListItemFragment } from "@/graphql/generated/fragments/listItem.fragment";
import { ListItemCreationInput } from "@/graphql/generated/inputs/listItem.inputs";
import { ListItem } from "@/graphql/generated/models/listItem.model";

interface ListItemCreationFieldsProps {
  dataTuple: [ListItemCreationInput, Dispatch<Payload<ListItemCreationInput>>];
}

export default function ListItemCreationFields(props: ListItemCreationFieldsProps) {
  return CreationFields<ListItem, ListItemCreationInput, { createListItem: ListItemFragment }>({
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
        type: "Map",
        required: true,
      },
    ],
    ...props,
  });
}
