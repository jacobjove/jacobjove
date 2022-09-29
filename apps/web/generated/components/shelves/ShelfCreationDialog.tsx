import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/shelf.fields";
import { ShelfFragment } from "@web/generated/graphql/fragments/shelf.fragment";
import { ShelfCreationInput } from "@web/generated/graphql/inputs/shelf.inputs";
import { useCreateShelf, useShelfReducer } from "@web/generated/hooks/shelf.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface ShelfCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function ShelfCreationDialog(props: ShelfCreationDialogProps) {
  const [create] = useCreateShelf();
  const dataTuple = useShelfReducer();
  return CreationDialog<ShelfFragment, ShelfCreationInput, { createShelf: ShelfFragment }>({
    typeName: "shelf",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
