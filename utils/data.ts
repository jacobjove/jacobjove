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
// import { DebouncedFunc } from "lodash";
import pDebounce from "p-debounce";
import { Dispatch, MutableRefObject, useReducer, useRef } from "react";
import { SchemaOf } from "yup";

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
  mutationOptions?: MutationFunctionOptions<MutationReturnType, MutationArgsType>,
  handlerOptions?: { skipValidation?: boolean }
) => Promise<FetchResult<MutationReturnType, Record<string, unknown>, Record<string, unknown>>>;

export function useHandleMutation<MutationReturnType, MutationArgsType extends { data: unknown }>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<MutationReturnType, MutationArgsType>,
  preMutationValidationSchema?: SchemaOf<MutationArgsType["data"]>,
  getOptimisticResponse?: (data: MutationArgsType["data"]) => MutationReturnType,
  debounceDelay = DEFAULT_MUTATION_DEBOUNCE_DELAY
): [
  MutableRefObject<MutationFunction<MutationReturnType, MutationArgsType>>,
  MutationResult<MutationReturnType>,
  MutableRefObject<AbortController | undefined>
] {
  const abortController = useRef<AbortController>();
  const [mutate, mutationResult] = useMutation<MutationReturnType, MutationArgsType>(
    mutation,
    mutationHookOptions
  );
  const mutationHandlerRef = useRef(
    pDebounce(
      (
        mutationOptions?: MutationFunctionOptions<MutationReturnType, MutationArgsType>,
        handlerOptions?: { skipValidation?: boolean }
      ) => {
        const controller = new window.AbortController();
        abortController.current = controller;
        if (preMutationValidationSchema && !handlerOptions?.skipValidation) {
          preMutationValidationSchema.validateSync(mutationOptions?.variables?.data);
        }
        const modifiedMutationOptions = mutationOptions
          ? {
              ...(!!(getOptimisticResponse && mutationOptions?.variables?.data) && {
                optimisticResponse: getOptimisticResponse(mutationOptions?.variables?.data),
              }),
              ...mutationOptions,
              context: { fetchOptions: { signal: controller.signal } },
            }
          : mutationOptions;
        return mutate(modifiedMutationOptions);
      },
      debounceDelay
    )
  );
  return [mutationHandlerRef, mutationResult, abortController];
}
