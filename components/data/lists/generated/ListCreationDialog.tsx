import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/list.fields";
import { ListFragment } from "@/graphql/generated/fragments/list.fragment";
import { useCreateList, useListDataReducer } from "@/graphql/generated/hooks/list.hooks";
import { ListCreationInput } from "@/graphql/generated/inputs/list.inputs";
import { List } from "@/graphql/generated/models/list.model";
import { getOptimisticResponseForListCreation } from "@/graphql/generated/mutations/list.mutations";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ListCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ListCreationDialog(props: ListCreationDialogProps) {
  const [create] = useCreateList();
  const dataTuple = useListDataReducer();
  return CreationDialog<List, ListCreationInput, { createList: ListFragment }>({
    typeName: "list",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForListCreation,
    ...props,
  });
}
