import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/list.fields";
import { ListFragment } from "@/graphql/generated/fragments/list.fragment";
import { useCreateList, useListReducer } from "@/graphql/generated/hooks/list.hooks";
import { ListCreationInput } from "@/graphql/generated/inputs/list.inputs";
import List from "@/graphql/generated/types/List";
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
