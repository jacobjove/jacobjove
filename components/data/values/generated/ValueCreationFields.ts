import CreationFields from "@/components/data/CreationFields";
import { ValueFragment } from "@/graphql/generated/fragments/value.fragment";
import { ValueCreationInput } from "@/graphql/generated/inputs/value.inputs";
import { Value } from "@/graphql/generated/models/value.model";

interface ValueCreationFieldsProps {
  dataTuple: [ValueCreationInput, Dispatch<Payload<ValueCreationInput>>];
}

export default function ValueCreationFields(props: ValueCreationFieldsProps) {
  return CreationFields<Value, ValueCreationInput, { createValue: ValueFragment }>({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },
    ],
    ...props,
  });
}
