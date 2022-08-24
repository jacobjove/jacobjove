import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/user.fields";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { useCreateUser, useUserDataReducer } from "@/graphql/generated/hooks/user.hooks";
import { UserCreationInput } from "@/graphql/generated/inputs/user.inputs";
import { getOptimisticResponseForUserCreation } from "@/graphql/generated/mutations/user.mutations";
import { User } from "@/graphql/generated/types/user.type";
import { bindPopover } from "material-ui-popup-state/hooks";

export type UserCreationDialogProps = ReturnType<typeof bindPopover>;

export default function UserCreationDialog(props: UserCreationDialogProps) {
  const [create] = useCreateUser();
  const dataTuple = useUserDataReducer();
  return CreationDialog<User, UserCreationInput, { createUser: UserFragment }>({
    typeName: "user",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForUserCreation,
    ...props,
  });
}
