import CreationFields from "@/components/data/CreationFields";
import { AccountFragment } from "@/graphql/generated/fragments/account.fragment";
import { AccountCreationInput } from "@/graphql/generated/inputs/account.inputs";
import { Account } from "@/graphql/generated/models/account.model";

interface AccountCreationFieldsProps {
  dataTuple: [AccountCreationInput, Dispatch<Payload<AccountCreationInput>>];
}

export default function AccountCreationFields(props: AccountCreationFieldsProps) {
  return CreationFields<Account, AccountCreationInput, { createAccount: AccountFragment }>({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String[]",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "DateTime",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },
    ],
    ...props,
  });
}
