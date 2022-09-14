import { postCreate, postUpdate } from "@web/generated/types/Dashboard/hooks";
import DashboardModel from "@web/generated/models/DashboardModel";
import UserModel from "@web/generated/models/UserModel";
import {
  DashboardCreationArgs,
  DashboardUpdateArgs,
  DashboardUpsertionArgs,
  FindUniqueDashboardArgs,
} from "@web/graphql/generated/args/dashboard.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findDashboard = async ({ where }: FindUniqueDashboardArgs) => {
  const filter = convertFilterForMongo(where);
  return DashboardModel.findOne(filter);
};

export const createDashboard = async ({ data }: DashboardCreationArgs) => {
  const dashboard = await DashboardModel.create(data);
  if (dashboard) await postCreate(dashboard);
  return dashboard;
};

export const updateDashboard = async ({ where, data }: DashboardUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const dashboard = await DashboardModel.findOneAndUpdate(filter, data, {
    returnDocument: "after",
  });
  // NOTE: This update fails if it's not awaited.
  dashboard &&
    (await UserModel.findOneAndUpdate(
      { _id: dashboard.userId, "dashboards._id": dashboard._id },
      {
        $set: { "dashboards.$": { ...dashboard } },
      }
    ));
  if (dashboard) await postUpdate(dashboard);
  return dashboard;
};

export const upsertDashboard = async ({ where, data }: DashboardUpsertionArgs) => {
  const dashboardUpsertResult = await DashboardModel.findOneAndUpdate(
    convertFilterForMongo(where),
    data,
    {
      upsert: true,
      new: true,
      returnDocument: "after",
      runValidators: true,
      setDefaultsOnInsert: true,
      rawResult: true,
    }
  );
  const dashboard = dashboardUpsertResult.value;
  if (dashboard) {
    if (!dashboardUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(dashboard);
    } else {
      await postUpdate(dashboard);
    }
  }
  return dashboard;
};
