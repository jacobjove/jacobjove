import {
  BeliefCreationArgs,
  BeliefUpdateArgs,
  BeliefUpsertionArgs,
  FindUniqueBeliefArgs,
} from "@web/generated/graphql/args/belief.args";
import { Belief } from "@web/generated/interfaces/Belief";
import BeliefModel from "@web/generated/models/Belief";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findBelief = async ({ where }: FindUniqueBeliefArgs) => {
  const filter = convertFilterForMongo(where);
  return BeliefModel.findOne(filter).lean({ virtuals: true });
};

export const createBelief = async ({ data }: BeliefCreationArgs) => {
  return BeliefModel.create([data]).then((results) => results[0]);
};

export const updateBelief = async ({ where, data }: BeliefUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await BeliefModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertBelief = async ({ where, data }: BeliefUpsertionArgs) => {
  const result: ModifyResult<Belief> = await BeliefModel.findOneAndUpdate(
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
