import { CalendarEvent } from "@/graphql/schema";
import { InputData } from "@/utils/data";
import { addMinutes } from "date-fns";

export const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

export type CalendarEventData = InputData<CalendarEvent>;

export type InitialCalendarEventData = Pick<CalendarEventData, "start" | "calendarId"> &
  Partial<CalendarEventData>;

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
  // prettier-ignore
  if (!eventData.calendarId) throw new Error("Calendar ID not specified.");
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
