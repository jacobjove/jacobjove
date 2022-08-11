import { Account } from "@/generated/models/account.model";
import { GET_ACCOUNTS } from "@/generated/queries/account.queries";
import { initializeApollo } from "@/lib/apollo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { CalendarClient } from "@/utils/calendar/client";
import { isValidProvider } from "@/utils/calendar/providers";
import rateLimit from "@/utils/rate-limit";
import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth/next";

const limiter = rateLimit({
  ttl: 60 * 1000, // 60 seconds
});

const GetCalendars: NextApiHandler = async (req, res) => {
  if (!req.query.provider) {
    return res.status(400).json({ error: "Missing provider" });
  } else if (!isValidProvider(req.query.provider as string)) {
    return res.status(400).json({ error: "Invalid provider" });
  }
  const provider = req.query.provider as CalendarProvider; // "google"
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session?.user.id) return res.status(401).json({ error: "Not authenticated" });
  if (await limiter.check(`GetCalendars_${session.user.id}`).catch(() => false)) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  const apolloClient = initializeApollo(); // TODO
  // TODO
  let accounts: Account[] = await apolloClient
    .query({
      query: GET_ACCOUNTS,
      context: { session },
    })
    .then((result) => result.data.accounts);
  accounts = accounts.filter((account) => account.provider === provider);
  // id: true,
  // provider: true,
  // remoteId: true,
  // accessToken: true,
  // refreshToken: true,
  // syncToken: true,
  const promises = accounts.map(async (account) => {
    const calendarClient = new CalendarClient(account);
    return await calendarClient.listCalendars();
  });
  return Promise.all(promises)
    .then((results) => {
      return res.json({ calendars: results.flat() });
    })
    .catch((e) => {
      const error = e?.stack ?? e?.response?.data?.error;
      return res.status(error?.code ?? 500).json(error ?? e);
    });
};

export default GetCalendars;
