/* Edit this file to add a non-default post-save hook for the User type. */

import { CalendarModel, NotebookModel } from "@/graphql/generated/models";

export const postSave = async (user: any) => {
  // const CalendarModel = (await import(`${process.env.BASE_DIR}/graphql/generated/models/calendar.model`)) as any;
  // const NotebookModel = (await import(`${process.env.BASE_DIR}/graphql/generated/models/notebook.model`)) as any;
  let saveChanges = false;
  if (!user.calendars?.length) {
    const defaultCalendar = await CalendarModel.create({
      userId: user.id,
      name: "Default calendar",
    });
    user.calendars = [defaultCalendar];
    user.markModified("calendars");
    user.settings.defaultCalendarId = defaultCalendar.id;
    user.markModified("settings");
    saveChanges = true;
  }
  if (!user.notebooks?.length) {
    const defaultNotebook = await NotebookModel.create({
      userId: user.id,
      title: "Journal",
    });
    user.notebooks = [defaultNotebook];
    user.markModified("notebooks");
    saveChanges = true;
  }
  saveChanges && user.save();
};
