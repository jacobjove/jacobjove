import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/listItem.fields";
import { ListItemFragment } from "@/graphql/generated/fragments/listItem.fragment";
import { useCreateListItem, useListItemReducer } from "@/graphql/generated/hooks/listItem.hooks";
import { ListItemCreationInput } from "@/graphql/generated/inputs/listItem.inputs";
import ListItem from "@/graphql/generated/types/ListItem";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ListItemCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ListItemCreationDialog(props: ListItemCreationDialogProps) {
  const [create] = useCreateListItem();
  const dataTuple = useListItemReducer();
  return CreationDialog<ListItem, ListItemCreationInput, { createListItem: ListItemFragment }>({
    typeName: "listItem",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
