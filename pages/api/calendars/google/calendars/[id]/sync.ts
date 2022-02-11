import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { initializeApollo } from "@/utils/apollo/client";
import { printError } from "@/utils/apollo/error-handling";
import prisma from "@/utils/prisma";
import rateLimiter from "@/utils/rate-limit";
import { addYears } from "date-fns";
import { google } from "googleapis";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const limiter = rateLimiter({
  ttl: 60 * 1000, // 60 seconds
});

const SyncCalendar: NextApiHandler = async (req, res) => {
  const calendarId = req.query.id as string;
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).json({ error: "Not authenticated" });
  if (await limiter.check(res, `SyncCalendar_${session.user.id}`).catch(() => false)) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
  const apolloClient = initializeApollo();
  const user = await apolloClient
    .query<{ user: User }>({
      query: GET_USER,
      variables: { userId: session.user.id },
    })
    .then((result) => result.data.user)
    .catch(printError);
  if (!user) return res.status(401).json({ error: "Failed to retrieve user data" });

  // Get the calendar.
  const calendar = user.calendars.find(
    (calendar) => calendar.provider === "google" && calendar.sourceId === calendarId
  );
  if (!calendar) return res.status(404).json({ error: "Could not find calendar" });

  const account = user.accounts.find((account) => account.provider === calendar.provider) || null;
  if (!account) return;

  const googleAuth = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  );
  googleAuth.setCredentials({
    access_token: account.accessToken,
    refresh_token: account.refreshToken,
  });
  const googleCalendar = google.calendar({
    version: "v3",
    auth: googleAuth,
  });

  const startMin = new Date();
  const startMax = addYears(startMin, 1);
  return await googleCalendar.events
    .list({
      calendarId,
      // https://developers.google.com/calendar/api/guides/sync
      ...(!calendar.syncToken
        ? {
            // Set filters to use during the initial full sync.
            // Sync tokens aren't compatible with most filters, so these filters
            // should be omitted after the initial full sync.
            timeMin: startMin.toISOString(),
            timeMax: startMax.toISOString(),
          }
        : {
            syncToken: calendar.syncToken,
          }),
    })
    .then((data) => {
      if (data.data.nextSyncToken) {
        prisma.calendar
          .update({
            where: { id: calendar.id },
            data: { syncToken: data.data.nextSyncToken },
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
      data.data.items
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
          const canceled = item.status === "cancelled";
          const eventData = {
            sourceId: item.id,
            calendarSourceId: calendar.sourceId,
            calendarId: calendar.id,
            title: item.summary || "Untitled event",
            start: (start.dateTime ?? start.date) as string,
            allDay: !!start.date,
            end: item.end?.dateTime,
            ...(item.created && { createdAt: item.created }),
            ...(item.updated && { updatedAt: item.updated }),
            canceled,
          };
          if (eventData.sourceId && eventData.calendarSourceId) {
            prisma.calendarEvent
              .upsert({
                where: {
                  sourceId_calendarSourceId: {
                    sourceId: eventData.sourceId,
                    calendarSourceId: eventData.calendarSourceId,
                  },
                },
                update: eventData,
                create: eventData,
              })
              .catch(console.error);
          }
        });
    })
    .catch((error) => {
      console.log(error);
    });
  return res.json({ status: "ok" });
};

export default SyncCalendar;
