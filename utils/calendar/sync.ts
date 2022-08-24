import AccountModel from "@/graphql/generated/models/account.model";
import { UPDATE_CALENDAR } from "@/graphql/generated/mutations/calendar.mutations";
import { UPSERT_CALENDAR_EVENT } from "@/graphql/generated/mutations/calendarEvent.mutations";
import { GET_CALENDAR } from "@/graphql/generated/queries/calendar.queries";
import { Calendar } from "@/graphql/generated/types/calendar.type";
import { initializeApollo } from "@/lib/apollo";
import { CalendarClient } from "@/utils/calendar/client";
import rateLimiter from "@/utils/rate-limit";
import { addYears } from "date-fns";
import { Session } from "next-auth";

const limiter = rateLimiter({
  ttl: 60 * 1000, // 60 seconds
});

export const syncCalendar = async (calendarId: string, session: Session) => {
  const apolloClient = initializeApollo(); // TODO
  const key = `SyncCalendars_${session.user.id}`;
  if (await limiter.check(key).catch(() => false)) {
    throw new Error("Rate limit exceeded");
  }
  const calendarResponses: Record<string, Record<string, string>> = {};
  const calendar: Calendar = await apolloClient
    .query({
      query: GET_CALENDAR,
      context: { session },
    })
    .then((result) => result.data.calendar);
  if (!calendar || !(calendar.provider && calendar.remoteId)) {
    throw new Error("Calendar not found");
  }
  const account = await AccountModel.findById(calendar.accountId); // TODO: use GraphQL
  if (!account || !(calendar.provider && calendar.remoteId)) {
    throw new Error("Calendar provider account not found");
  }
  const calendarClient = new CalendarClient(account);
  const timeMin = new Date();
  const timeMax = addYears(timeMin, 1);
  return await calendarClient
    .listEvents({
      calendarId: calendar.remoteId,
      syncToken: calendar.syncToken || undefined,
      timeMin,
      timeMax,
    })
    .then(async (data) => {
      if (data.data.nextSyncToken) {
        apolloClient
          .mutate({
            mutation: UPDATE_CALENDAR,
            variables: {
              where: { id: calendar.id },
              data: { syncToken: data.data.nextSyncToken },
            },
          })
          .catch(console.error);
      } else if (data.data.nextPageToken) {
        console.log("TODO: handle paginated responses!");
      }
      // Note: Sometimes sync tokens are invalidated by the server, for various reasons
      // including token expiration or changes in related ACLs. In such cases, the server
      // will respond to an incremental request with a response code 410. This should
      // trigger a full wipe of the client’s store and a new full sync.
      if (data.status === 410) {
        console.log(">>> TODO: handle 410 response!");
        console.log(data.statusText);
        console.log(data.data.items);
        // TODO: delete the sync token and make a new request
      }

      // TODO: handle deleted events!
      // The result will contain deleted entries so that the client gets the chance to
      // remove them from storage.
      return data.data.items
        ?.filter((item) => Boolean(item.start))
        .forEach((item) => {
          /* Example: 
              { 
                kind: 'calendar#event',
                etag: '"303275348453600"',
                id: '3vmncqhm2cttva76vqbr8tb6k',
                status: 'confirmed',
                htmlLink: 'https://www.google.com/calendar/event?eid=M3ZtbmNxaG0yY3Q5dHZhNzZ2cWJyOHRiNmtfMjAxODATlUMTczMDAwWiBqYWNvYi50LmZyZWRlcmlja3NlbkBt',
                created: '2017-12-28T20:29:53.000Z',
                updated: '2018-01-19T15:45:42.268Z',
                summary: 'JAPAN 680R',
                location: '3079 JFSB',
                creator: { email: 'blahblahblah@gmail.com', self: true },
                organizer: { email: 'blahblahblah@gmail.com', self: true },
                start: { dateTime: '2018-01-19T11:30:00-06:00', timeZone: 'America/Denver' },
                end: { dateTime: '2018-01-19T12:30:00-06:00', timeZone: 'America/Denver' },
                recurrence: [ 'RRULE:FREQ=WEEKLY;UNTIL=20180421T055959Z;BYDAY=FR' ],
                iCalUID: '3vmncqhm2ct9tva7vqbr8tb6k@google.com',
                sequence: 1,
                reminders: { useDefault: true },
                eventType: 'default'
              } */
          const start = item.start as NonNullable<typeof item.start>;
          // Note: Google uses the British English spelling of "canceled."
          const canceled = item.status === "cancelled";
          const eventData = {
            remoteId: item.id,
            calendarSourceId: calendar.remoteId,
            calendarId: calendar._id,
            title: item.summary || "Untitled event",
            start: (start.dateTime ?? start.date) as string,
            allDay: !!start.date,
            end: item.end?.dateTime,
            ...(item.created && { createdAt: item.created }),
            ...(item.updated && { updatedAt: item.updated }),
            canceled,
          };
          if (eventData.remoteId && eventData.calendarSourceId) {
            apolloClient
              .mutate({
                mutation: UPSERT_CALENDAR_EVENT,
                variables: {
                  where: {
                    remoteId_calendarId: {
                      remoteId: eventData.remoteId,
                      calendarId,
                    },
                  },
                  data: eventData,
                },
              })
              .catch(console.error);
          }
        });
    })
    .catch((error) => {
      console.log(error);
      calendarResponses[`${calendar.remoteId}`] = { error: `${error}` };
    });
};

export default syncCalendar;
