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
    // completedAt: null,
    // archivedAt: null,
    // parentId: null,
    ...initialData,
  };
}

export type Payload<T> = {
  field: "init" | keyof T;
  value: T | T[keyof T];
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

export function useHandleMutation<MutationReturnType, MutationArgsType>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<MutationReturnType, MutationArgsType>,
  // abortController: MutableRefObject<AbortController | undefined>,
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
    debounce((...args: Parameters<typeof mutate>) => {
      const controller = new window.AbortController();
      abortController.current = controller;
      const [mutationOptions] = args;
      if (mutationOptions) {
        mutationOptions.context = { fetchOptions: { signal: controller.signal } };
      }
      const mutationResult = mutate(mutationOptions);
      return mutationResult;
    }, debounceDelay)
  );
  return [mutationHandlerRef, mutationResult, abortController];
}

// export type InitialCalendarEventData = Pick<CalendarEventData, "start" | "calendarId"> &
//   Partial<CalendarEventData>;

// export const initialize = (
//   data: InitialCalendarEventData
// ): CalendarEventData => {
//   // prettier-ignore
//   if (!data.calendarId) throw new Error("Calendar ID not specified.");
//   return {
//     taskId: null,
//     scheduleId: null,
//     archivedAt: null,
//     remoteId: null,
//     habitId: null,
//     title: "",
//     notes: "",
//     canceled: false,
//     allDay: false,
//     // end: data.end ??
//     //   (!data.allDay
//     //     ? addMinutes(new Date(data.start), DEFAULT_EVENT_LENGTH_IN_MINUTES)
//     //     : undefined),
//     ...data,
//   };
// };
