/* Edit this file to add a non-default post-save hook for the Calendar type. */

import { DocumentType } from "@typegoose/typegoose";
import Calendar from "@web/generated/types/Calendar";

export const postUpdate = async (calendar: DocumentType<Calendar>) => {
  return calendar;
};
