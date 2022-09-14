import {
  DocumentNode,
  FetchResult,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation,
} from "@apollo/client";
import pDebounce from "p-debounce";
import { MutableRefObject, useRef } from "react";
import { SchemaOf } from "yup";

const DEFAULT_MUTATION_DEBOUNCE_DELAY = 600; // 0.6 seconds

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
        let data = mutationOptions?.variables?.data;
        if (preMutationValidationSchema && !handlerOptions?.skipValidation) {
          const validationResult = preMutationValidationSchema.validateSync(data);
          data = validationResult;
        }
        const modifiedMutationOptions = mutationOptions
          ? {
              ...(!!(getOptimisticResponse && data) && {
                optimisticResponse: getOptimisticResponse(data),
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
