import { Calendar, CalendarEvent } from "@/graphql/schema";
import { Dispatch } from "react";

export type CalendarData = {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseMenu?: boolean;
  data: CalendarData;
  loading?: boolean;
  error?: Error;
  includeDateSelector?: boolean;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<Date>;
  dispatchInitialEventFormData: Dispatch<{ field: string; value: unknown }>;
  defaultCalendar: Calendar;
  hidden: boolean;
}
