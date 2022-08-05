import { ID, Model } from "@/graphql/schema/types";
import { DocumentNode, FetchResult, MutationFunctionOptions, useMutation } from "@apollo/client";
import { DebouncedFunc } from "lodash";
import debounce from "lodash/debounce";
import { ObjectId } from "mongodb";
import { Dispatch, MutableRefObject, useReducer, useRef } from "react";

export type InputData<T extends Model> = Omit<
  T,
  "_id" | "id" | "userId" | "createdAt" | "updatedAt"
> & {
  _id?: ObjectId;
  id?: ID;
};

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

type Payload<T> =
  | {
      field: "init";
      value: T;
    }
  | {
      field: keyof T;
      value: unknown;
    };

function dataReducer<T>(state: T, payload: Payload<T>) {
  if (payload.field === "init") return initializeData(payload.value);
  return { ...state, [payload.field]: payload.value };
}

export function useDataReducer<T>(initialData: T): [T, Dispatch<Payload<T>>] {
  const [data, dispatchData] = useReducer(dataReducer, initialData, initializeData);
  // TODO
  return [data as T, dispatchData as Dispatch<Payload<T>>];
}

export function useHandleMutation<MutationReturnType>(
  mutation: DocumentNode,
  abortController: MutableRefObject<AbortController | undefined>,
  debounceDelay = DEFAULT_MUTATION_DEBOUNCE_DELAY
): [
  MutableRefObject<
    DebouncedFunc<
      (
        options: MutationFunctionOptions<MutationReturnType>
      ) =>
        | Promise<FetchResult<MutationReturnType, Record<string, unknown>, Record<string, unknown>>>
        | undefined
    >
  >,
  unknown
] {
  const [mutate, extra] = useMutation<MutationReturnType>(mutation);
  const mutationHandlerRef = useRef(
    debounce((...args: Parameters<typeof mutate>) => {
      const controller = new window.AbortController();
      abortController.current = controller;
      const [mutationOptions] = args;
      if (mutationOptions) {
        mutationOptions.context = { fetchOptions: { signal: controller.signal } };
      }
      return mutate(mutationOptions);
    }, debounceDelay)
  );
  return [mutationHandlerRef, extra];
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
