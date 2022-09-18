import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateShelving, useShelvingReducer } from "@web/generated/hooks/shelving.hooks";
import fields from "@web/graphql/generated/fields/shelving.fields";
import { ShelvingFragment } from "@web/graphql/generated/fragments/shelving.fragment";
import { ShelvingCreationInput } from "@web/graphql/generated/inputs/shelving.inputs";
import Shelving from "@web/graphql/generated/types/Shelving";
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
