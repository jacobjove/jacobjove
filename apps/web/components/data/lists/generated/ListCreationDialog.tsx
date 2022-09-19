import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/list.fields";
import { ListFragment } from "@web/generated/graphql/fragments/list.fragment";
import { ListCreationInput } from "@web/generated/graphql/inputs/list.inputs";
import List from "@web/generated/graphql/types/List";
import { useCreateList, useListReducer } from "@web/generated/hooks/list.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ListCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ListCreationDialog(props: ListCreationDialogProps) {
  const [create] = useCreateList();
  const dataTuple = useListReducer();
  return CreationDialog<List, ListCreationInput, { createList: ListFragment }>({
    typeName: "list",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
