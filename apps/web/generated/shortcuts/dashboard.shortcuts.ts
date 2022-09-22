import {
  DashboardCreationArgs,
  DashboardUpdateArgs,
  DashboardUpsertionArgs,
  FindUniqueDashboardArgs,
} from "@web/generated/graphql/args/dashboard.args";
import DashboardModel from "@web/generated/models/Dashboard";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findDashboard = async ({ where }: FindUniqueDashboardArgs) => {
  const filter = convertFilterForMongo(where);
  return DashboardModel.findOne(filter).lean({ virtuals: true });
};

export const createDashboard = async ({ data }: DashboardCreationArgs) => {
  return DashboardModel.create([data]).then((results) => results[0]);
};

export const updateDashboard = async ({ where, data }: DashboardUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await DashboardModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertDashboard = async ({ where, data }: DashboardUpsertionArgs) => {
  const exists = await DashboardModel.exists(where);
  return exists ? updateDashboard({ where, data }) : createDashboard({ data });
  /*
  const result: ModifyResult<Dashboard> = await DashboardModel.findOneAndUpdate(
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
  ).lean({ virtuals: true });
  return result.value;
  */
};
