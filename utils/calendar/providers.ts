export const getCalendarScope = (provider: CalendarProvider): string => {
  switch (provider) {
    case "google":
      return "https://www.googleapis.com/auth/calendar";
    default:
      return "";
  }
};
