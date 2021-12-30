import { CalendarEvent } from "@/graphql/schema";
import { Session } from "next-auth";

export interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
  calendarEvents: CalendarEvent[];
  session: Session;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  hidden: boolean;
  // calendars: Calendar[];
}
