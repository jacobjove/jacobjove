const ENABLED_PROVIDERS: CalendarProvider[] = ["google"];

export const isProviderEnabled = (provider: string) => {
  return ENABLED_PROVIDERS.includes(provider as CalendarProvider);
};

export const getCalendarScope = (provider: CalendarProvider): string => {
  switch (provider) {
    case "google":
      return "https://www.googleapis.com/auth/calendar";
    default:
      throw new Error("Provider not supported");
  }
};
