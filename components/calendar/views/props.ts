import { Calendar, CalendarEvent } from "@/graphql/schema";
import { Dispatch, SetStateAction } from "react";

export type CalendarData = {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseViewMenu?: boolean;
  data: CalendarData;
  loading: boolean;
  error?: Error;
  includeDateSelector: boolean;
}

interface EventFormData {
  title: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
  notes: string;
  calendarId: number;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  initialEventFormData: EventFormData;
  setInitialEventFormData: Dispatch<SetStateAction<EventFormData>>;
  defaultCalendar: Calendar;
  hidden: boolean;
}
