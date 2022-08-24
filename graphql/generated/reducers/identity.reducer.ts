/* Do not edit this file. It was generated programmatically. */
// import { Identity } from "@/graphql/generated/types/identity.type";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { IdentityCreationInput } from "@/graphql/generated/inputs/identity.inputs";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";

export type IdentityData = Partial<IdentityCreationInput> & { id?: ID };
// export type IdentityData = InputData<Identity>;
// export type InitialIdentityData = InitialData<Identity, "rank" | "userId">;

export function initializeIdentityData(
  data: Partial<IdentityData>,
  user?: UserFragment | null | undefined
): Partial<IdentityData> {
  if (!user) return data;
  return {
    userId: user.id,
    name: "",
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function identityDataReducer(state: IdentityData, payload: Payload<IdentityData>) {
  if (payload.field === "init")
    return initializeIdentityData(payload.value as Partial<IdentityData>);
  return { ...state, [payload.field]: payload.value };
}
