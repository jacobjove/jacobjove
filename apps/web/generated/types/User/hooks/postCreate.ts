/* Edit this file to add a non-default post-save hook for the User type. */

// import mongoosePromise from "@web/lib/mongodb";
import { DocumentType, getModelForClass } from "@typegoose/typegoose";
import Calendar from "@web/generated/types/Calendar";
import Notebook from "@web/generated/types/Notebook";
import User from "@web/generated/types/User";

type UserDocument = Pick<
  DocumentType<User>,
  "calendars" | "notebooks" | "settings" | "id" | "markModified" | "save"
>;

export const postCreate = async (user: UserDocument) => {
  // let _mongoose: undefined | Awaited<typeof mongoosePromise> = undefined;
  let saveChanges = false;
  if (!user.calendars?.length) {
    const CalendarModel = getModelForClass(Calendar);
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
    const NotebookModel = getModelForClass(Notebook);
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
