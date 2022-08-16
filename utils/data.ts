import { Model } from "@/graphql/schema/types";
import { RequiredKeys } from "@/types/global";
import {
  DocumentNode,
  FetchResult,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation,
} from "@apollo/client";
import { DebouncedFunc } from "lodash";
import debounce from "lodash/debounce";
import { Dispatch, MutableRefObject, useReducer, useRef } from "react";

const ID_FIELDS = ["_id", "id"] as const;

const READONLY_FIELDS = [...ID_FIELDS, "__typename", "createdAt", "updatedAt"] as const;

type ReadonlyFields = typeof READONLY_FIELDS[number];

type PotentiallyRequiredFields<T extends Model> = Exclude<keyof T, ReadonlyFields>;

export type InputData<T extends Model> = RequiredKeys<Omit<T, ReadonlyFields>> & Partial<T>;
export type InitialData<T extends Model, RequiredFields extends PotentiallyRequiredFields<T>> =
  | T
  | (Pick<T, RequiredFields> & Partial<InputData<T>>);

const DEFAULT_MUTATION_DEBOUNCE_DELAY = 600; // 0.6 seconds

function initializeData<T>(initialData: T): T {
  return {
    // title: "",
    // description: "",
    // dueDate: null,
    // parentId: null,
    ...initialData,
  };
}

// export type Payload<T> = {
//   field: "init" | keyof T;
//   value: T | T[keyof T];
// };

export type Payload<T> =
  | {
      field: "init";
      value: Partial<T>;
    }
  | {
      field: keyof T;
      value: T[keyof T];
    };

export function dataReducer<T>(state: T, payload: { field: "init"; value: T }): T;
export function dataReducer<T>(state: T, payload: { field: keyof T; value: T[keyof T] }): T;
export function dataReducer<T>(state: T, payload: Payload<T>) {
  if (payload.field === "init") return payload.value as T;
  return { ...state, [payload.field]: payload.value };
}

export function useDataReducer<T>(initialData: T): [T, Dispatch<Payload<T>>] {
  const [data, dispatchData] = useReducer(dataReducer, initialData, initializeData);
  // TODO
  return [data as T, dispatchData as Dispatch<Payload<T>>];
}

type MutationFunction<MutationReturnType, MutationArgsType> = (
  options: MutationFunctionOptions<MutationReturnType, MutationArgsType>
) => Promise<FetchResult<MutationReturnType, Record<string, unknown>, Record<string, unknown>>>;

export function useHandleMutation<MutationReturnType, MutationArgsType extends { data: unknown }>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<MutationReturnType, MutationArgsType>,
  preMutationValidator?: (data: MutationArgsType["data"]) => Promise<unknown>,
  debounceDelay = DEFAULT_MUTATION_DEBOUNCE_DELAY
): [
  MutableRefObject<DebouncedFunc<MutationFunction<MutationReturnType, MutationArgsType>>>,
  MutationResult<MutationReturnType>,
  MutableRefObject<AbortController | undefined>
] {
  const abortController = useRef<AbortController>();
  const [mutate, mutationResult] = useMutation<MutationReturnType, MutationArgsType>(
    mutation,
    mutationHookOptions
  );
  const mutationHandlerRef = useRef(
    debounce((mutationOptions: MutationFunctionOptions<MutationReturnType, MutationArgsType>) => {
      const controller = new window.AbortController();
      abortController.current = controller;
      const premutate =
        preMutationValidator && mutationOptions?.variables?.data
          ? preMutationValidator
          : Promise.resolve;
      return premutate(mutationOptions?.variables?.data).then(() => {
        const modifiedMutationOptions = mutationOptions
          ? { ...mutationOptions, context: { fetchOptions: { signal: controller.signal } } }
          : mutationOptions;
        const mutationResult = mutate(modifiedMutationOptions);
        return mutationResult;
      });
    }, debounceDelay)
  );
  return [mutationHandlerRef, mutationResult, abortController];
}
