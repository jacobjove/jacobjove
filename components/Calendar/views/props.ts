import { CalendarEvent } from "@/graphql/schema";
import { Session } from "next-auth";

export interface CalendarProps {
  collapseViewMenu?: boolean;
  data: CalendarEvent[];
  loading: boolean;
  error?: Error;
  session: Session;
}

export interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  hidden: boolean;
}
