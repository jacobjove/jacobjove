import dynamic from "next/dynamic";

export const OldCalendar = dynamic(() => import("@/components/Calendar/_OldCalendar"), {
  ssr: false,
});

const Calendar = dynamic(() => import("@/components/Calendar/_Calendar"), { ssr: false });

export default Calendar;
