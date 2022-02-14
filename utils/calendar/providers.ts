import { Account } from "@/prisma/generated";
import { google } from "googleapis";

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

export const getCalendarClient = (
  account: Pick<Account, "provider" | "accessToken" | "refreshToken">
) => {
  let auth;
  switch (account.provider) {
    case "google":
      auth = new google.auth.OAuth2(process.env.AUTH_GOOGLE_ID, process.env.AUTH_GOOGLE_SECRET);
      auth.setCredentials({
        access_token: account.accessToken,
        refresh_token: account.refreshToken,
      });
      return google.calendar({ version: "v3", auth });
    default:
      throw new Error("Provider not supported");
  }
};
