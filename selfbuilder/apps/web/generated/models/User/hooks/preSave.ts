/* Edit this file to add a non-default pre-save hook for the User type. */

import { User } from "@web/generated/interfaces";
import CalendarModel from "@web/generated/models/Calendar";
import NotebookModel from "@web/generated/models/Notebook";
import bcrypt from "bcryptjs";
import { HydratedDocument } from "mongoose";

const COST_FACTOR = 12;

export async function preSave(user: HydratedDocument<User>) {
  if (user.isModified("password") && user.password) {
    user.password = await bcrypt.hash(user.password, COST_FACTOR);
  }
  if (!user.calendars?.length) {
    const defaultCalendar = await CalendarModel.create({
      userId: user._id,
      name: "Default calendar",
    });
    user.calendars = [defaultCalendar];
    user.settings.defaultCalendarId = defaultCalendar._id.toHexString();
  }
  if (!user.notebooks?.length) {
    const defaultNotebook = await NotebookModel.create({
      userId: user._id,
      title: "Journal",
    });
    user.notebooks = [defaultNotebook];
  }
}
