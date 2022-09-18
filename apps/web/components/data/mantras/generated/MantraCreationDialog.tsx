import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateMantra, useMantraReducer } from "@web/generated/hooks/mantra.hooks";
import fields from "@web/graphql/generated/fields/mantra.fields";
import { MantraFragment } from "@web/graphql/generated/fragments/mantra.fragment";
import { MantraCreationInput } from "@web/graphql/generated/inputs/mantra.inputs";
import Mantra from "@web/graphql/generated/types/Mantra";
import { bindPopover } from "material-ui-popup-state/hooks";

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
