/* Edit this file to add a non-default post-save hook for the Dashboard type. */

import { DocumentType } from "@typegoose/typegoose";
import Dashboard from "@web/generated/types/Dashboard";

export const postUpdate = async (dashboard: DocumentType<Dashboard>) => {
  return dashboard;
};
