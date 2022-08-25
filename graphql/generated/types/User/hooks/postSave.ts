/* Edit this file to add a non-default post-save hook for the User type. */

import mongoosePromise from "@/lib/mongodb";

export const postSave = async (user: any) => {
  let mongoose: undefined | Awaited<typeof mongoosePromise> = undefined;
  let saveChanges = false;
  if (!user.calendars?.length) {
    mongoose = await mongoosePromise;
    const CalendarModel = mongoose.model("Calendar");
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
    mongoose = await mongoosePromise;
    const NotebookModel = mongoose.model("Notebook");
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
