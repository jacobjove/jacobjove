import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/shelving.fields";
import { ShelvingFragment } from "@/graphql/generated/fragments/shelving.fragment";
import { useCreateShelving, useShelvingReducer } from "@/graphql/generated/hooks/shelving.hooks";
import { ShelvingCreationInput } from "@/graphql/generated/inputs/shelving.inputs";
import Shelving from "@/graphql/generated/types/Shelving";
import { bindPopover } from "material-ui-popup-state/hooks";

export type ShelvingCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ShelvingCreationDialog(props: ShelvingCreationDialogProps) {
  const [create] = useCreateShelving();
  const dataTuple = useShelvingReducer();
  return CreationDialog<Shelving, ShelvingCreationInput, { createShelving: ShelvingFragment }>({
    typeName: "shelving",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
