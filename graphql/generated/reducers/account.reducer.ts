/* Do not edit this file. It was generated programmatically. */
// import Account from "@/graphql/generated/types/Account";
import { AccountFragment } from "@/graphql/generated/fragments/account.fragment";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { AccountCreationInput } from "@/graphql/generated/inputs/account.inputs";
import { ID } from "@/graphql/schema/types";
import { ArrayAction, arrayReducer, Payload } from "@/utils/data/reduction";

export type AccountData = Partial<AccountCreationInput> & { id?: ID };
// export type AccountData = InputData<Account>;
// export type InitialAccountData = InitialData<Account, "rank" | "userId">;

export function initializeAccountData(
  data: Partial<AccountData>,
  user?: UserFragment | null | undefined
): Partial<AccountData> {
  if (!user) return data;
  return {
    userId: user.id,
    provider: "",
    remoteId: "",
    scopes: [],
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function accountReducer(state: AccountData, payload: Payload<AccountData>) {
  if (payload.field === "init") return initializeAccountData(payload.value as Partial<AccountData>);
  return { ...state, [payload.field]: payload.value };
}

export function accountsReducer(state: AccountFragment[], action: ArrayAction<AccountFragment>) {
  return arrayReducer<AccountFragment>(state, action);
}
