/* Do not edit this file. It was generated programmatically. */

import { IdentityCreationArgs, IdentityUpdateArgs } from "@/graphql/generated/args/identity.args";
import { IdentityFragment } from "@/graphql/generated/fragments/identity.fragment";
import {
  CREATE_IDENTITY,
  updateCacheAfterCreatingIdentity,
  UPDATE_IDENTITY,
} from "@/graphql/generated/mutations/identity.mutations";
import {
  IdentityData,
  identityDataReducer,
  initializeIdentityData,
} from "@/graphql/generated/reducers/identity.reducer";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";
// import { useUser } from "@/components/contexts/UserContext";

type IdentityCreationMutationHookOptions = MutationHookOptions<
  { createIdentity: IdentityFragment },
  IdentityCreationArgs
>;

export const useCreateIdentity = (options?: IdentityCreationMutationHookOptions) => {
  return useHandleMutation<{ createIdentity: IdentityFragment }, IdentityCreationArgs>(
    CREATE_IDENTITY,
    {
      ...updateCacheAfterCreatingIdentity,
      ...(options ?? {}),
    }
  );
};

type IdentityUpdateMutationHookOptions = MutationHookOptions<
  { updateIdentity: IdentityFragment },
  IdentityUpdateArgs
>;

export const useUpdateIdentity = (options?: IdentityUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateIdentity: IdentityFragment }, IdentityUpdateArgs>(
    UPDATE_IDENTITY,
    options
  );
};

export const useIdentityDataReducer = (
  data: IdentityData
): [IdentityData, Dispatch<Payload<IdentityData>>] => {
  const initialData = initializeIdentityData(data);
  const [identityData, dispatchIdentityData] = useReducer(
    identityDataReducer,
    initialData,
    initializeIdentityData
  );
  useEffect(() => {
    if (data.userId && !identityData?.userId) {
      console.log("Dispatching identity data!");
      dispatchIdentityData({ field: "init", value: data });
    }
  }, [data, identityData]);
  return [identityData, dispatchIdentityData];
};
