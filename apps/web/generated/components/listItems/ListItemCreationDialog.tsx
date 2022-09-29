import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/listItem.fields";
import { ListItemFragment } from "@web/generated/graphql/fragments/listItem.fragment";
import { ListItemCreationInput } from "@web/generated/graphql/inputs/listItem.inputs";
import { useCreateListItem, useListItemReducer } from "@web/generated/hooks/listItem.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface ListItemCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function ListItemCreationDialog(props: ListItemCreationDialogProps) {
  const [create] = useCreateListItem();
  const dataTuple = useListItemReducer();
  return CreationDialog<
    ListItemFragment,
    ListItemCreationInput,
    { createListItem: ListItemFragment }
  >({
    typeName: "listItem",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
