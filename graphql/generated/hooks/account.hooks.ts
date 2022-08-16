/* Do not edit this file. It was generated programmatically. */

import { useUser } from "@/components/contexts/UserContext";
import { AccountCreationArgs, AccountUpdateArgs } from "@/graphql/generated/args/account.args";
import { AccountFragment } from "@/graphql/generated/fragments/account.fragment";
import {
  CREATE_ACCOUNT,
  updateCacheAfterCreatingAccount,
  UPDATE_ACCOUNT,
} from "@/graphql/generated/mutations/account.mutations";
import {
  AccountData,
  accountDataReducer,
  initializeAccountData,
} from "@/graphql/generated/reducers/account.reducer";
import { accountCreationInputSchema } from "@/graphql/generated/schemas/account.schemas";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";

type AccountCreationMutationHookOptions = MutationHookOptions<
  { createAccount: AccountFragment },
  AccountCreationArgs
>;

export const useCreateAccount = (options?: AccountCreationMutationHookOptions) => {
  return useHandleMutation<{ createAccount: AccountFragment }, AccountCreationArgs>(
    CREATE_ACCOUNT,
    { ...updateCacheAfterCreatingAccount, ...(options ?? {}) },
    accountCreationInputSchema.validate
  );
};

type AccountUpdateMutationHookOptions = MutationHookOptions<
  { updateAccount: AccountFragment },
  AccountUpdateArgs
>;

export const useUpdateAccount = (options?: AccountUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateAccount: AccountFragment }, AccountUpdateArgs>(
    UPDATE_ACCOUNT,
    options
  );
};

export const useAccountDataReducer = (
  data?: AccountData
): [AccountData, Dispatch<Payload<AccountData>>] => {
  const user = useUser();
  const starterData = data ?? {};
  const initializedData = initializeAccountData(starterData, user);
  const [accountData, dispatchAccountData] = useReducer(
    accountDataReducer,
    initializedData,
    initializeAccountData
  );
  useEffect(() => {
    if (user?.id && !accountData?.userId) {
      dispatchAccountData({
        field: "init",
        value: initializeAccountData(accountData, user),
      });
    }
  }, [user, accountData]);
  return [accountData, dispatchAccountData];
};
