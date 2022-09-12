import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateAccount, useAccountReducer } from "@web/graphql/generated/hooks/account.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { AccountCreationInput } from "@web/graphql/generated/inputs/account.inputs";
import Account from "@web/graphql/generated/types/Account";
import { AccountFragment } from "@web/graphql/generated/fragments/account.fragment";
import fields from "@web/graphql/generated/fields/account.fields";

export type AccountCreationDialogProps = ReturnType<typeof bindPopover>;

export default function AccountCreationDialog(props: AccountCreationDialogProps) {
  const [create,] = useCreateAccount();
  const dataTuple = useAccountReducer();
  return CreationDialog<Account, AccountCreationInput, { createAccount: AccountFragment }>({
    typeName: "account",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
