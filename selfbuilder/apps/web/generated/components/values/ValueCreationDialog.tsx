import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/value.fields";
import { ValueFragment } from "@web/generated/graphql/fragments/value.fragment";
import { ValueCreationInput } from "@web/generated/graphql/inputs/value.inputs";
import { useCreateValue, useValueReducer } from "@web/generated/hooks/value.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface ValueCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function ValueCreationDialog(props: ValueCreationDialogProps) {
  const [create] = useCreateValue();
  const dataTuple = useValueReducer();
  return CreationDialog<ValueFragment, ValueCreationInput, { createValue: ValueFragment }>({
    typeName: "value",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
