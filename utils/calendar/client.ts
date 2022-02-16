/*
THIS IS A SERVER-SIDE-ONLY MODULE.
Importing from this module in client-side code will result in an error.
*/

import { Account, Calendar } from "@/prisma/generated";
import prisma from "@/utils/prisma";
import { calendar_v3, google } from "googleapis";

type RequiredAccountData = Pick<
  Account,
  "id" | "provider" | "accessToken" | "refreshToken" | "syncToken"
>;

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

/*
  This is a wrapper for the different clients of supported calendar providers.
  Whenever we add support for another calendar provider, we need to update this
  wrapper class to support the new provider's calendar client.
*/
export class CalendarClient {
  _client: calendar_v3.Calendar; // Google only, currently.
  provider: CalendarProvider;
  accountId: number;
  calendarListSyncToken: string | undefined;

  constructor(account: RequiredAccountData) {
    this._client = getCalendarClient(account);
    this.accountId = account.id;
    this.provider = account.provider as CalendarProvider;
    this.calendarListSyncToken = account.syncToken || undefined;
  }

  // Note: Currently, this only works for Google.
  async listCalendars(): Promise<Partial<Calendar>[]> {
    return await this._client.calendarList
      .list({
        minAccessRole: "owner",
        // https://developers.google.com/calendar/api/guides/sync
        ...(this.calendarListSyncToken ? { syncToken: this.calendarListSyncToken } : {}),
      })
      .then((data) => {
        if (data.data.nextSyncToken) {
          const nextCalendarListSyncToken = data.data.nextSyncToken;
          this.calendarListSyncToken = nextCalendarListSyncToken;
          prisma.account.update({
            where: { id: this.accountId },
            data: { syncToken: nextCalendarListSyncToken },
          });
        } else if (data.data.nextPageToken) {
          throw new Error("nextPageToken token not implemented");
        }
        if (!data.data.items) throw new Error("No items in response");
        return data.data.items.map((item) => {
          /* {
            accessRole: "owner"
            backgroundColor: "#9fc6e7"
            colorId: "15"
            conferenceProperties: {allowedConferenceSolutionTypes: Array(1)}
            defaultReminders: [{…}]
            etag: "\"15528382553000\""
            foregroundColor: "#000000"
            id: "blahblahblah@gmail.com"
            kind: "calendar#calendarListEntry"
            notificationSettings: {notifications: Array(4)}
            primary: true
            selected: true
            summary: "blahblahblah@gmail.com"
            timeZone: "America/Chicago"
          } */
          return {
            name: item.summary,
            color: item.backgroundColor,
            remoteId: item.id,
            accountId: this.accountId,
            primary: item.primary,
            provider: this.provider,
          };
        });
      });
  }

  async listEvents({
    calendarId,
    syncToken,
    timeMin,
    timeMax,
  }: {
    calendarId: string;
    syncToken?: string;
    timeMin?: Date;
    timeMax?: Date;
  }) {
    const timeMinISO = timeMin ? timeMin.toISOString() : undefined;
    const timeMaxISO = timeMax ? timeMax.toISOString() : undefined;
    return await this._client.events.list({
      calendarId,
      // https://developers.google.com/calendar/api/guides/sync
      ...(!syncToken
        ? {
            // Set filters to use during the initial full sync.
            // Sync tokens aren't compatible with most filters, so these filters
            // should be omitted after the initial full sync.
            timeMin: timeMinISO,
            timeMax: timeMaxISO,
          }
        : { syncToken }),
    });
  }
}
