import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/account.fields";
import { AccountFragment } from "@web/generated/graphql/fragments/account.fragment";
import { AccountCreationInput } from "@web/generated/graphql/inputs/account.inputs";
import { useAccountReducer, useCreateAccount } from "@web/generated/hooks/account.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface AccountCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function AccountCreationDialog(props: AccountCreationDialogProps) {
  const [create] = useCreateAccount();
  const dataTuple = useAccountReducer();
  return CreationDialog<AccountFragment, AccountCreationInput, { createAccount: AccountFragment }>({
    typeName: "account",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
