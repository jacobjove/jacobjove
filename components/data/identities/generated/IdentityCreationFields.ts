import CreationFields from "@/components/data/CreationFields";
import { IdentityFragment } from "@/graphql/generated/fragments/identity.fragment";
import { IdentityCreationInput } from "@/graphql/generated/inputs/identity.inputs";
import { Identity } from "@/graphql/generated/models/identity.model";

interface IdentityCreationFieldsProps {
  dataTuple: [IdentityCreationInput, Dispatch<Payload<IdentityCreationInput>>];
}

export default function IdentityCreationFields(props: IdentityCreationFieldsProps) {
  return CreationFields<Identity, IdentityCreationInput, { createIdentity: IdentityFragment }>({
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
