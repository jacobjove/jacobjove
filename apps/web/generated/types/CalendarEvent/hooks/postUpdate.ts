/* Edit this file to add a non-default post-save hook for the CalendarEvent type. */

import { DocumentType } from "@typegoose/typegoose";
import CalendarEvent from "@web/generated/types/CalendarEvent";

export const postUpdate = async (calendarEvent: DocumentType<CalendarEvent>) => {
  return calendarEvent;
};
