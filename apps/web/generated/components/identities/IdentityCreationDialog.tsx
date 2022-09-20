import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/identity.fields";
import { IdentityFragment } from "@web/generated/graphql/fragments/identity.fragment";
import { IdentityCreationInput } from "@web/generated/graphql/inputs/identity.inputs";
import Identity from "@web/generated/graphql/types/Identity";
import { useCreateIdentity, useIdentityReducer } from "@web/generated/hooks/identity.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface IdentityCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
}

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
