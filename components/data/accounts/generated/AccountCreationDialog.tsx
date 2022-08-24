import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/account.fields";
import { AccountFragment } from "@/graphql/generated/fragments/account.fragment";
import { useAccountDataReducer, useCreateAccount } from "@/graphql/generated/hooks/account.hooks";
import { AccountCreationInput } from "@/graphql/generated/inputs/account.inputs";
import { getOptimisticResponseForAccountCreation } from "@/graphql/generated/mutations/account.mutations";
import { Account } from "@/graphql/generated/types/account.type";
import { bindPopover } from "material-ui-popup-state/hooks";

export type AccountCreationDialogProps = ReturnType<typeof bindPopover>;

export default function AccountCreationDialog(props: AccountCreationDialogProps) {
  const [create] = useCreateAccount();
  const dataTuple = useAccountDataReducer();
  return CreationDialog<Account, AccountCreationInput, { createAccount: AccountFragment }>({
    typeName: "account",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForAccountCreation,
    ...props,
  });
}
