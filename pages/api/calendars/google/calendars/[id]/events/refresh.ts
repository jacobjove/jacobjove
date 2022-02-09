import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { initializeApollo } from "@/lib/apollo/apolloClient";
import rateLimit from "@/utils/rate-limit";
import { google } from "googleapis";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
// import prisma from "@/lib/prisma";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const MAX_REQUESTS_PER_MINUTE = 10;

const GoogleCalendar: NextApiHandler = async (req, res) => {
  const calendarId = req.query.calendarId as string;
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
    .then((data) => {
      const calendarEvents = data.data.items?.map((item) => {
        console.log(">>>", item);
        /* 
        {
        }
      */
        // TODO: match our Calendar type
        return {
          ...item,
        };
      });
      return res.json({ events: calendarEvents });
    })
    .catch((e) => {
      const error = e?.stack ?? e?.response?.data?.error;
      return res.status(error?.code ?? 500).json(error ?? e);
    });
};

export default GoogleCalendar;
