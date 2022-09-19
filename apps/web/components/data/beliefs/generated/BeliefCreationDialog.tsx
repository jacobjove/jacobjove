import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/belief.fields";
import { BeliefFragment } from "@web/generated/graphql/fragments/belief.fragment";
import { BeliefCreationInput } from "@web/generated/graphql/inputs/belief.inputs";
import Belief from "@web/generated/graphql/types/Belief";
import { useBeliefReducer, useCreateBelief } from "@web/generated/hooks/belief.hooks";
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
