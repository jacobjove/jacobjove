import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/account.fields";
import { AccountFragment } from "@web/generated/graphql/fragments/account.fragment";
import { AccountCreationInput } from "@web/generated/graphql/inputs/account.inputs";
import Account from "@web/generated/graphql/types/Account";
import { useAccountReducer, useCreateAccount } from "@web/generated/hooks/account.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";

export type AccountCreationDialogProps = ReturnType<typeof bindPopover>;

export default function AccountCreationDialog(props: AccountCreationDialogProps) {
  const [create] = useCreateAccount();
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
