import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateUser, useUserReducer } from "@web/generated/hooks/user.hooks";
import fields from "@web/graphql/generated/fields/user.fields";
import { UserFragment } from "@web/graphql/generated/fragments/user.fragment";
import { UserCreationInput } from "@web/graphql/generated/inputs/user.inputs";
import User from "@web/graphql/generated/types/User";
import { bindPopover } from "material-ui-popup-state/hooks";

export type UserCreationDialogProps = ReturnType<typeof bindPopover>;

export default function UserCreationDialog(props: UserCreationDialogProps) {
  const [create] = useCreateUser();
  const dataTuple = useUserReducer();
  return CreationDialog<User, UserCreationInput, { createUser: UserFragment }>({
    typeName: "user",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
