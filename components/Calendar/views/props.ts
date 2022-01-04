import { CalendarEvent } from "@/graphql/schema";
import { Session } from "next-auth";

export type CalendarData = {
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseViewMenu?: boolean;
  data: CalendarData;
  loading: boolean;
  error?: Error;
  session: Session;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  hidden: boolean;
}
