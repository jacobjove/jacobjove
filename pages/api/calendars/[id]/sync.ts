import { getAuth } from "@/utils/auth/ssr";
import { syncCalendar } from "@/utils/calendar/sync";
import { NextApiHandler } from "next";

const SyncCalendar: NextApiHandler = async (req, res) => {
  const calendarId = req.query.id as string;
  const { token } = await getAuth({ req, res });
  if (!token) return res.status(401).json({ error: "Not authenticated" });
  await syncCalendar(calendarId, token).catch((e) => {
    const error = e?.stack ?? e?.response?.data?.error;
    return res.status(error?.code ?? 500).json(error ?? e);
  });

  return res.json({ status: "ok" });
};

export default SyncCalendar;
