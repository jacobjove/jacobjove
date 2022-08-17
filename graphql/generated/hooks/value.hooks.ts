/* Do not edit this file. It was generated programmatically. */

import { useUser } from "@/components/contexts/UserContext";
import { ValueCreationArgs, ValueUpdateArgs } from "@/graphql/generated/args/value.args";
import { ValueFragment } from "@/graphql/generated/fragments/value.fragment";
import {
  CREATE_VALUE,
  updateCacheAfterCreatingValue,
  UPDATE_VALUE,
} from "@/graphql/generated/mutations/value.mutations";
import {
  initializeValueData,
  ValueData,
  valueDataReducer,
} from "@/graphql/generated/reducers/value.reducer";
import {
  valueCreationInputSchema,
  valueUpdateInputSchema,
} from "@/graphql/generated/schemas/value.schemas";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";

type ValueCreationMutationHookOptions = MutationHookOptions<
  { createValue: ValueFragment },
  ValueCreationArgs
>;

export const useCreateValue = (options?: ValueCreationMutationHookOptions) => {
  return useHandleMutation<{ createValue: ValueFragment }, ValueCreationArgs>(
    CREATE_VALUE,
    { ...updateCacheAfterCreatingValue, ...(options ?? {}) },
    valueCreationInputSchema
  );
};

type ValueUpdateMutationHookOptions = MutationHookOptions<
  { updateValue: ValueFragment },
  ValueUpdateArgs
>;

export const useUpdateValue = (options?: ValueUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateValue: ValueFragment }, ValueUpdateArgs>(
    UPDATE_VALUE,
    options,
    valueUpdateInputSchema
  );
};

export const useValueDataReducer = (
  data?: ValueData
): [ValueData, Dispatch<Payload<ValueData>>] => {
  const { user } = useUser();
  const starterData = data ?? {};
  const initializedData = initializeValueData(starterData, user);
  const [valueData, dispatchValueData] = useReducer(
    valueDataReducer,
    initializedData,
    initializeValueData
  );
  useEffect(() => {
    if (user?.id && !valueData?.userId) {
      dispatchValueData({
        field: "init",
        value: initializeValueData(valueData, user),
      });
    }
  }, [user, valueData]);
  return [valueData, dispatchValueData];
};
