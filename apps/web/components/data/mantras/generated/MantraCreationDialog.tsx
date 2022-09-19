import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/mantra.fields";
import { MantraFragment } from "@web/generated/graphql/fragments/mantra.fragment";
import { MantraCreationInput } from "@web/generated/graphql/inputs/mantra.inputs";
import Mantra from "@web/generated/graphql/types/Mantra";
import { useCreateMantra, useMantraReducer } from "@web/generated/hooks/mantra.hooks";
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
