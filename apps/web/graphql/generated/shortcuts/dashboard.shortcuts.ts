import { postSave } from "@web/graphql/generated/types/Dashboard/hooks";
import DashboardModel from "@web/graphql/generated/models/DashboardModel";
import {
  DashboardCreationArgs,
  DashboardUpsertionArgs,
} from "@web/graphql/generated/args/dashboard.args";

export const createDashboard = async (args: DashboardCreationArgs) => {
  const dashboard = await DashboardModel.create(args);
  if (dashboard) postSave(dashboard);
  return dashboard;
};

export const upsertDashboard = async (args: DashboardUpsertionArgs) => {
  const { where, data } = args;
  const dashboardUpsertResult = await DashboardModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const dashboard = dashboardUpsertResult.value;
  if (dashboard && !dashboardUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(dashboard);
  }
  return dashboard;
};
