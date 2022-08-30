import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/mantra.fields";
import { MantraFragment } from "@/graphql/generated/fragments/mantra.fragment";
import { useCreateMantra, useMantraReducer } from "@/graphql/generated/hooks/mantra.hooks";
import { MantraCreationInput } from "@/graphql/generated/inputs/mantra.inputs";
import Mantra from "@/graphql/generated/types/Mantra";
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
