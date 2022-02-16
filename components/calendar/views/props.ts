import { EventData } from "@/components/calendar/EventEditingDialog";
import { Calendar, CalendarEvent } from "@/graphql/schema";
import { Dispatch } from "react";

export type CalendarData = {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseMenu?: boolean;
  data: CalendarData;
  loading: boolean;
  error?: Error;
  includeDateSelector: boolean;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  initialEventFormData: EventData;
  dispatchInitialEventFormData: Dispatch<{ field: string; value: unknown }>;
  defaultCalendar: Calendar;
  hidden: boolean;
}
