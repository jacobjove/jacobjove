import CreationFields from "@/components/data/CreationFields";
import { BeliefFragment } from "@/graphql/generated/fragments/belief.fragment";
import { BeliefCreationInput } from "@/graphql/generated/inputs/belief.inputs";
import { Belief } from "@/graphql/generated/models/belief.model";

interface BeliefCreationFieldsProps {
  dataTuple: [BeliefCreationInput, Dispatch<Payload<BeliefCreationInput>>];
}

export default function BeliefCreationFields(props: BeliefCreationFieldsProps) {
  return CreationFields<Belief, BeliefCreationInput, { createBelief: BeliefFragment }>({
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
