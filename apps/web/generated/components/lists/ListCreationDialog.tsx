import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/list.fields";
import { ListFragment } from "@web/generated/graphql/fragments/list.fragment";
import { ListCreationInput } from "@web/generated/graphql/inputs/list.inputs";
import { useCreateList, useListReducer } from "@web/generated/hooks/list.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface ListCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function ListCreationDialog(props: ListCreationDialogProps) {
  const [create] = useCreateList();
  const dataTuple = useListReducer();
  return CreationDialog<ListFragment, ListCreationInput, { createList: ListFragment }>({
    typeName: "list",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
