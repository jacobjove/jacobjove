import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateMantra, useMantraReducer } from "@web/generated/hooks/mantra.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { MantraCreationInput } from "@web/graphql/generated/inputs/mantra.inputs";
import Mantra from "@web/generated/types/Mantra";
import { MantraFragment } from "@web/graphql/generated/fragments/mantra.fragment";
import fields from "@web/graphql/generated/fields/mantra.fields";

export type MantraCreationDialogProps = ReturnType<typeof bindPopover>;

export default function MantraCreationDialog(props: MantraCreationDialogProps) {
  const [create] = useCreateMantra();
  const dataTuple = useMantraReducer();
  return CreationDialog<Mantra, MantraCreationInput, { createMantra: MantraFragment }>({
    typeName: "mantra",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
