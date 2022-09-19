import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/shelving.fields";
import { ShelvingFragment } from "@web/generated/graphql/fragments/shelving.fragment";
import { ShelvingCreationInput } from "@web/generated/graphql/inputs/shelving.inputs";
import Shelving from "@web/generated/graphql/types/Shelving";
import { useCreateShelving, useShelvingReducer } from "@web/generated/hooks/shelving.hooks";
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
