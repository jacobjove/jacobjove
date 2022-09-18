import { Dashboard } from "@web/generated/interfaces/Dashboard";
import DashboardModel from "@web/generated/models/Dashboard";
import {
  DashboardCreationArgs,
  DashboardUpdateArgs,
  DashboardUpsertionArgs,
  FindUniqueDashboardArgs,
} from "@web/graphql/generated/args/dashboard.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

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
};
