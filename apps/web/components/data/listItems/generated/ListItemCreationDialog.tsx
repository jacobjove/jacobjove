import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/listItem.fields";
import { ListItemFragment } from "@web/generated/graphql/fragments/listItem.fragment";
import { ListItemCreationInput } from "@web/generated/graphql/inputs/listItem.inputs";
import ListItem from "@web/generated/graphql/types/ListItem";
import { useCreateListItem, useListItemReducer } from "@web/generated/hooks/listItem.hooks";
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
