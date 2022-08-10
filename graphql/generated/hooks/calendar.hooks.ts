/* Do not edit this file. It was generated programmatically. */

import { CalendarCreationArgs, CalendarUpdateArgs } from "@/graphql/generated/args/calendar.args";
import { CalendarFragment } from "@/graphql/generated/fragments/calendar.fragment";
import {
  CREATE_CALENDAR,
  updateCacheAfterCreatingCalendar,
  UPDATE_CALENDAR,
} from "@/graphql/generated/mutations/calendar.mutations";
import {
  CalendarData,
  calendarDataReducer,
  initializeCalendarData,
} from "@/graphql/generated/reducers/calendar.reducer";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useEffect, useReducer } from "react";
// import { useUser } from "@/components/contexts/UserContext";

type CalendarCreationMutationHookOptions = MutationHookOptions<
  { createCalendar: CalendarFragment },
  CalendarCreationArgs
>;

export const useCreateCalendar = (options?: CalendarCreationMutationHookOptions) => {
  return useHandleMutation<{ createCalendar: CalendarFragment }, CalendarCreationArgs>(
    CREATE_CALENDAR,
    {
      ...updateCacheAfterCreatingCalendar,
      ...(options ?? {}),
    }
  );
};

type CalendarUpdateMutationHookOptions = MutationHookOptions<
  { updateCalendar: CalendarFragment },
  CalendarUpdateArgs
>;

export const useUpdateCalendar = (options?: CalendarUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateCalendar: CalendarFragment }, CalendarUpdateArgs>(
    UPDATE_CALENDAR,
    options
  );
};

export const useCalendarDataReducer = (
  data: CalendarData
): [CalendarData, Dispatch<Payload<CalendarData>>] => {
  const initialData = initializeCalendarData(data);
  const [calendarData, dispatchCalendarData] = useReducer(
    calendarDataReducer,
    initialData,
    initializeCalendarData
  );
  useEffect(() => {
    if (data.userId && !calendarData?.userId) {
      console.log("Dispatching calendar data!");
      dispatchCalendarData({ field: "init", value: data });
    }
  }, [data, calendarData]);
  return [calendarData, dispatchCalendarData];
};
