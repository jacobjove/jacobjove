import CreationFields from "@/components/data/CreationFields";
import { MantraFragment } from "@/graphql/generated/fragments/mantra.fragment";
import { MantraCreationInput } from "@/graphql/generated/inputs/mantra.inputs";
import { Mantra } from "@/graphql/generated/models/mantra.model";

interface MantraCreationFieldsProps {
  dataTuple: [MantraCreationInput, Dispatch<Payload<MantraCreationInput>>];
}

export default function MantraCreationFields(props: MantraCreationFieldsProps) {
  return CreationFields<Mantra, MantraCreationInput, { createMantra: MantraFragment }>({
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
    ],
    ...props,
  });
}
