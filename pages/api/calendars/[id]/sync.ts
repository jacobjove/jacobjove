import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { syncCalendar } from "@/utils/calendar/sync";
import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth/next";

const SyncCalendar: NextApiHandler = async (req, res) => {
  const calendarId = req.query.id as string;
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Not authenticated" });
  await syncCalendar(calendarId, session).catch((e) => {
    const error = e?.stack ?? e?.response?.data?.error;
    return res.status(error?.code ?? 500).json(error ?? e);
  });

  return res.json({ status: "ok" });
};

export default SyncCalendar;
