import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { CalendarEventData } from "@/graphql/schema/generated/reducers/calendarEvent.reducer";
import { InitialData } from "@/utils/data";
import { addMinutes } from "date-fns";

export const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

export type InitialCalendarEventData = InitialData<
  CalendarEvent,
  "start" | "calendarId" | "userId"
>;

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
