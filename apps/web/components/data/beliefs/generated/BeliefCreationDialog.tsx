import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/graphql/generated/fields/belief.fields";
import { BeliefFragment } from "@web/graphql/generated/fragments/belief.fragment";
import { useBeliefReducer, useCreateBelief } from "@web/graphql/generated/hooks/belief.hooks";
import { BeliefCreationInput } from "@web/graphql/generated/inputs/belief.inputs";
import Belief from "@web/graphql/generated/types/Belief";
import { bindPopover } from "material-ui-popup-state/hooks";

export type BeliefCreationDialogProps = ReturnType<typeof bindPopover>;

export default function BeliefCreationDialog(props: BeliefCreationDialogProps) {
  const [create] = useCreateBelief();
  const dataTuple = useBeliefReducer();
  return CreationDialog<Belief, BeliefCreationInput, { createBelief: BeliefFragment }>({
    typeName: "belief",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
