import CreationFields from "@/components/data/CreationFields";
import { ShelvingFragment } from "@/graphql/generated/fragments/shelving.fragment";
import { ShelvingCreationInput } from "@/graphql/generated/inputs/shelving.inputs";
import { Shelving } from "@/graphql/generated/models/shelving.model";

interface ShelvingCreationFieldsProps {
  dataTuple: [ShelvingCreationInput, Dispatch<Payload<ShelvingCreationInput>>];
}

export default function ShelvingCreationFields(props: ShelvingCreationFieldsProps) {
  return CreationFields<Shelving, ShelvingCreationInput, { createShelving: ShelvingFragment }>({
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
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "Number",
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
