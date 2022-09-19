/* Edit this file to add a non-default post-save hook for the User type. */

import NotebookModel from "@web/generated/models/Notebook";
import UserDocument from "@web/generated/models/User/document";
import { createCalendar } from "@web/generated/shortcuts/calendar.shortcuts";

export const postCreate = async (user: UserDocument) => {
  let saveChanges = false;
  if (!user.calendars?.length) {
    const defaultCalendar = await createCalendar({
      data: {
        name: "Default calendar",
        userId: user.id,
      },
    });
    user.calendars = [defaultCalendar];
    user.markModified("calendars");
    user.settings.defaultCalendarId = defaultCalendar.id;
    user.markModified("settings");
    saveChanges = true;
  }
  if (!user.notebooks?.length) {
    const defaultNotebook = await NotebookModel.create({
      userId: user._id,
      title: "Journal",
    });
    user.notebooks = [defaultNotebook];
    user.markModified("notebooks");
    saveChanges = true;
  }
  saveChanges && user.save();
};
