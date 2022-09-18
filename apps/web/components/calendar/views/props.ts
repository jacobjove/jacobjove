import { Calendar, CalendarEvent } from "@web/graphql/generated/types";
import { Dispatch } from "react";

export type CalendarData = {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseMenu?: boolean;
  includeDateSelector?: boolean;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<Date>;
  defaultCalendar: Calendar;
  hidden: boolean;
}
