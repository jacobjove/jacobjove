import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { initializeApollo } from "@/lib/apollo/apolloClient";
import { google } from "googleapis";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const GoogleCalendar: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).json({ error: "Not authenticated" });
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

  await googleCalendar.calendarList
    .list({ minAccessRole: "owner" })
    .then((data) => {
      console.debug(data.data);
      res.json(data.data);
    })
    .catch((e) => {
      const error = e?.stack ?? e?.response?.data?.error;
      res.status(error?.code ?? 500).json(error ?? e);
    });
};

export default GoogleCalendar;
