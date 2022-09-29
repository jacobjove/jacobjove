import { CalendarFragment } from "@web/generated/graphql/fragments/calendar.fragment";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { Dispatch } from "react";

export type CalendarData = {
  calendars: CalendarFragment[];
  calendarEvents: CalendarEventFragment[];
};

export interface CalendarProps {
  collapseMenu?: boolean;
  includeDateSelector?: boolean;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<Date>;
  defaultCalendar: CalendarFragment;
  hidden: boolean;
}
