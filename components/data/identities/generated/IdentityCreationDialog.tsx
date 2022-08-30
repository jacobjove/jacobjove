import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/identity.fields";
import { IdentityFragment } from "@/graphql/generated/fragments/identity.fragment";
import { useCreateIdentity, useIdentityReducer } from "@/graphql/generated/hooks/identity.hooks";
import { IdentityCreationInput } from "@/graphql/generated/inputs/identity.inputs";
import Identity from "@/graphql/generated/types/Identity";
import { bindPopover } from "material-ui-popup-state/hooks";

export type IdentityCreationDialogProps = ReturnType<typeof bindPopover>;

export default function IdentityCreationDialog(props: IdentityCreationDialogProps) {
  const [create] = useCreateIdentity();
  const dataTuple = useIdentityReducer();
  return CreationDialog<Identity, IdentityCreationInput, { createIdentity: IdentityFragment }>({
    typeName: "identity",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
