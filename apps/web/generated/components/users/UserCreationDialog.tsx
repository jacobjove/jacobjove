import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/user.fields";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { UserCreationInput } from "@web/generated/graphql/inputs/user.inputs";
import User from "@web/generated/graphql/types/User";
import { useCreateUser, useUserReducer } from "@web/generated/hooks/user.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface UserCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

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
