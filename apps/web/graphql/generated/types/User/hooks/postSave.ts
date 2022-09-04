/* Edit this file to add a non-default post-save hook for the User type. */

// import mongoosePromise from "@web/lib/mongodb";
import { getModelForClass } from "@typegoose/typegoose";
import Calendar from "@web/graphql/generated/types/Calendar";
import Notebook from "@web/graphql/generated/types/Notebook";

export const postSave = async (user: any) => {
  // let _mongoose: undefined | Awaited<typeof mongoosePromise> = undefined;
  let saveChanges = false;
  if (!user.calendars?.length) {
    // _mongoose = await mongoosePromise;
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
    // _mongoose = await mongoosePromise;
    const NotebookModel = getModelForClass(Notebook);
    // const NotebookModel = mongoose.model("Notebook");
    const defaultNotebook = await NotebookModel.create({
      userId: user.id,
      title: "Journal",
    });
    user.notebooks = [defaultNotebook];
    user.markModified("notebooks");
    saveChanges = true;
  }
  console.log("postSave", user);
  saveChanges && user.save();
};
