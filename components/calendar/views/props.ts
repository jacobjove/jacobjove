import { Calendar, CalendarEvent } from "@/graphql/schema/generated/models";
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
  defaultCalendar: Calendar;
  hidden: boolean;
}
