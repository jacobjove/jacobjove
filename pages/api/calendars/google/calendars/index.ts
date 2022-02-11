import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { initializeApollo } from "@/utils/apollo/client";
import { printError } from "@/utils/apollo/error-handling";
import rateLimit from "@/utils/rate-limit";
import { google } from "googleapis";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const limiter = rateLimit({
  ttl: 60 * 1000, // 60 seconds
});

const GetCalendars: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).json({ error: "Not authenticated" });
  await limiter.check(res, `_${session.user.id}`).catch(() => {
    return res.status(429).json({ error: "Rate limit exceeded" });
  });
  const apolloClient = initializeApollo();
  const user = await apolloClient
    .query<{ user: User }>({
      query: GET_USER,
      variables: { userId: session.user.id },
    })
    .then((result) => result.data.user)
    .catch(printError);
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

  const syncToken = googleAccount.syncToken;

  return await googleCalendar.calendarList
    .list({
      minAccessRole: "owner",
      // https://developers.google.com/calendar/api/guides/sync
      ...(syncToken ? { syncToken } : {}),
    })
    .then((data) => {
      // TODO
      if (data.data.nextSyncToken || data.data.nextPageToken)
        throw new Error("Sync token not implemented");
      return res.json({
        calendars: data.data.items?.map((item) => {
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
          // TODO: match our Calendar type
          return {
            name: item.summary,
            color: item.backgroundColor,
            sourceId: item.id,
            accountSourceId: googleAccount.id,
            primary: item.primary,
            provider: "google",
          };
        }),
      });
    })
    .catch((e) => {
      const error = e?.stack ?? e?.response?.data?.error;
      return res.status(error?.code ?? 500).json(error ?? e);
    });
};

export default GetCalendars;
