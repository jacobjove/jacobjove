/* Edit this file to add a non-default post-save hook for the Dashboard type. */

import DashboardDocument from "@web/generated/interfaces/Dashboard";

export const postUpdate = async (dashboard: DashboardDocument, updatedFields: any) => {
  return dashboard;
};
