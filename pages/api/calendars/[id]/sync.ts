import { syncCalendar } from "@/utils/calendar/sync";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const SyncCalendar: NextApiHandler = async (req, res) => {
  const calendarId = parseInt(req.query.id as string);
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).json({ error: "Not authenticated" });
  await syncCalendar(calendarId, session).catch((e) => {
    const error = e?.stack ?? e?.response?.data?.error;
    return res.status(error?.code ?? 500).json(error ?? e);
  });

  return res.json({ status: "ok" });
};

export default SyncCalendar;
