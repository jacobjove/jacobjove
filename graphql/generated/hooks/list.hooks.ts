/* Do not edit this file. It was generated programmatically. */

import { ListCreationArgs, ListUpdateArgs } from "@/graphql/generated/args/list.args";
import { ListFragment } from "@/graphql/generated/fragments/list.fragment";
import {
  CREATE_LIST,
  updateCacheAfterCreatingList,
  UPDATE_LIST,
} from "@/graphql/generated/mutations/list.mutations";
import {
  initializeListData,
  ListData,
  listDataReducer,
} from "@/graphql/generated/reducers/list.reducer";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";
// import { useUser } from "@/components/contexts/UserContext";

type ListCreationMutationHookOptions = MutationHookOptions<
  { createList: ListFragment },
  ListCreationArgs
>;

export const useCreateList = (options?: ListCreationMutationHookOptions) => {
  return useHandleMutation<{ createList: ListFragment }, ListCreationArgs>(CREATE_LIST, {
    ...updateCacheAfterCreatingList,
    ...(options ?? {}),
  });
};

type ListUpdateMutationHookOptions = MutationHookOptions<
  { updateList: ListFragment },
  ListUpdateArgs
>;

export const useUpdateList = (options?: ListUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateList: ListFragment }, ListUpdateArgs>(UPDATE_LIST, options);
};

export const useListDataReducer = (data: ListData): [ListData, Dispatch<Payload<ListData>>] => {
  const initialData = initializeListData(data);
  const [listData, dispatchListData] = useReducer(listDataReducer, initialData, initializeListData);
  useEffect(() => {
    if (data.userId && !listData?.userId) {
      console.log("Dispatching list data!");
      dispatchListData({ field: "init", value: data });
    }
  }, [data, listData]);
  return [listData, dispatchListData];
};
