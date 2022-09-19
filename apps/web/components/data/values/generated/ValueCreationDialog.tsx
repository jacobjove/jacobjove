import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/value.fields";
import { ValueFragment } from "@web/generated/graphql/fragments/value.fragment";
import { ValueCreationInput } from "@web/generated/graphql/inputs/value.inputs";
import Value from "@web/generated/graphql/types/Value";
import { useCreateValue, useValueReducer } from "@web/generated/hooks/value.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ValueCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ValueCreationDialog(props: ValueCreationDialogProps) {
  const [create] = useCreateValue();
  const dataTuple = useValueReducer();
  return CreationDialog<Value, ValueCreationInput, { createValue: ValueFragment }>({
    typeName: "value",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
