import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateBelief, useBeliefReducer } from "@web/generated/hooks/belief.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { BeliefCreationInput } from "@web/graphql/generated/inputs/belief.inputs";
import Belief from "@web/generated/types/Belief";
import { BeliefFragment } from "@web/graphql/generated/fragments/belief.fragment";
import fields from "@web/graphql/generated/fields/belief.fields";

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
