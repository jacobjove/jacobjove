import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { initializeApollo } from "@/lib/apollo/apolloClient";
import rateLimit from "@/utils/rate-limit";
import { google } from "googleapis";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const MAX_REQUESTS_PER_MINUTE = 10;

const GoogleCalendar: NextApiHandler = async (req, res) => {
  const calendarId = req.query.id as string;
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).json({ error: "Not authenticated" });
  await limiter.check(res, MAX_REQUESTS_PER_MINUTE, "CACHE_TOKEN").catch(() => {
    return res.status(429).json({ error: "Rate limit exceeded" });
  });
  const apolloClient = initializeApollo();
  const user = await apolloClient
    .query<{ user: User }>({
      query: GET_USER,
      variables: { userId: session.user.id },
    })
    .then((result) => result.data.user)
    .catch((e) => {
      if (e.networkError?.result?.errors) {
        e.networkError.result.errors.forEach(
          (error: {
            message: string;
            extensions: { code: string; exception: { stacktrace: string[] } };
          }) => {
            console.error(error.message);
            console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
          }
        );
      } else {
        console.error(e);
      }
    });
  if (!user) return res.status(401).json({ error: "Failed to retrieve user data" });

  const googleAccount = user.accounts.find((account) => account.provider === "google") || null;
  if (!googleAccount) return res.status(401).json({ error: "No Google account" });
  const googleAuth = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  );
  googleAuth.setCredentials({
    access_token: googleAccount.accessToken,
    refresh_token: googleAccount.refreshToken,
  });

  const googleCalendar = google.calendar({
    version: "v3",
    auth: googleAuth,
  });

  return await googleCalendar.events
    .list({ calendarId })
    .then((data) =>
      res.json({
        calendars: data.data.items?.map((item) => {
          console.log(">>>", item);
          /* 
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
            }
          */
          // TODO: match our Calendar type
          return {
            sourceId: item.id,
            title: item.summary,
            start: item.start?.dateTime,
            end: item.end?.dateTime,
            createdAt: item.created,
            updatedAt: item.updated,
          };
        }),
      })
    )
    .catch((e) => {
      const error = e?.stack ?? e?.response?.data?.error;
      return res.status(error?.code ?? 500).json(error ?? e);
    });
};

export default GoogleCalendar;
