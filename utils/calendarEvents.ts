import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { InitialData, InputData } from "@/utils/data";
import { addMinutes } from "date-fns";

export const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

export type CalendarEventData = InputData<CalendarEvent>;

export type InitialCalendarEventData = InitialData<
  CalendarEvent,
  "start" | "calendarId" | "userId"
>;

export const calendarEventDataReducer = (
  state: CalendarEventData,
  payload: { field: string; value: unknown }
) => {
  if (payload.field === "init")
    return initializeCalendarEventData(payload.value as CalendarEventData);
  return { ...state, [payload.field]: payload.value };
};

export const initializeCalendarEventData = (
  eventData: InitialCalendarEventData
): CalendarEventData => {
  return {
    taskId: null,
    scheduleId: null,
    archivedAt: null,
    remoteId: null,
    habitId: null,
    title: "",
    notes: "",
    ...eventData,
    end:
      eventData.end ??
      (!eventData.allDay
        ? addMinutes(new Date(eventData.start), DEFAULT_EVENT_LENGTH_IN_MINUTES)
        : undefined),
    allDay: eventData.allDay ?? false,
    canceled: eventData.canceled || false,
  };
};
