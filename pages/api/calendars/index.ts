import { USE_FIREBASE } from "@/config";
import { getAuth } from "@/utils/auth/ssr";
import { CalendarClient } from "@/utils/calendar/client";
import { isValidProvider } from "@/utils/calendar/providers";
import prisma from "@/utils/prisma";
// import { firestore } from "@/utils/firebase/admin";
import rateLimit from "@/utils/rate-limit";
import { NextApiHandler } from "next";

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
  const { token } = await getAuth({ req, res });
  if (!token?.uid) return res.status(401).json({ error: "Not authenticated" });
  if (await limiter.check(`GetCalendars_${token.uid}`).catch(() => false)) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
  // TODO
  const accounts = USE_FIREBASE
    ? []
    : await prisma.account.findMany({
        where: {
          user: { id: token.uid },
          provider,
        },
        select: {
          id: true,
          provider: true,
          remoteId: true,
          accessToken: true,
          refreshToken: true,
          syncToken: true,
        },
      });
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
