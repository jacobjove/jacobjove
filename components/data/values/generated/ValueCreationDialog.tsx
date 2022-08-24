import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/value.fields";
import { ValueFragment } from "@/graphql/generated/fragments/value.fragment";
import { useCreateValue, useValueDataReducer } from "@/graphql/generated/hooks/value.hooks";
import { ValueCreationInput } from "@/graphql/generated/inputs/value.inputs";
import { getOptimisticResponseForValueCreation } from "@/graphql/generated/mutations/value.mutations";
import { Value } from "@/graphql/generated/types/value.type";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ValueCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ValueCreationDialog(props: ValueCreationDialogProps) {
  const [create] = useCreateValue();
  const dataTuple = useValueDataReducer();
  return CreationDialog<Value, ValueCreationInput, { createValue: ValueFragment }>({
    typeName: "value",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForValueCreation,
    ...props,
  });
}
