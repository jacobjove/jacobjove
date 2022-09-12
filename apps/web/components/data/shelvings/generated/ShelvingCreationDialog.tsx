import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateShelving, useShelvingReducer } from "@web/graphql/generated/hooks/shelving.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { ShelvingCreationInput } from "@web/graphql/generated/inputs/shelving.inputs";
import Shelving from "@web/graphql/generated/types/Shelving";
import { ShelvingFragment } from "@web/graphql/generated/fragments/shelving.fragment";
import fields from "@web/graphql/generated/fields/shelving.fields";

export type ShelvingCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ShelvingCreationDialog(props: ShelvingCreationDialogProps) {
  const [create,] = useCreateShelving();
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
