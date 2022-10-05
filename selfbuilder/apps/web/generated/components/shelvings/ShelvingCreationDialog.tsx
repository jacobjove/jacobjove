import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/shelving.fields";
import { ShelvingFragment } from "@web/generated/graphql/fragments/shelving.fragment";
import { ShelvingCreationInput } from "@web/generated/graphql/inputs/shelving.inputs";
import { useCreateShelving, useShelvingReducer } from "@web/generated/hooks/shelving.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface ShelvingCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function ShelvingCreationDialog(props: ShelvingCreationDialogProps) {
  const [create] = useCreateShelving();
  const dataTuple = useShelvingReducer();
  return CreationDialog<
    ShelvingFragment,
    ShelvingCreationInput,
    { createShelving: ShelvingFragment }
  >({
    typeName: "shelving",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
