export const getCalendarScope = (provider: CalendarProvider): string => {
  switch (provider) {
    case "google":
      return "https://www.googleapis.com/auth/calendar";
    // case "apple":
    //   return "";
    // case "outlook":
    //   return "https://outlook.office.com/calendars.read";
    default:
      return "";
  }
};
