import {
  BeliefCreationArgs,
  BeliefUpdateArgs,
  BeliefUpsertionArgs,
  FindUniqueBeliefArgs,
} from "@web/generated/graphql/args/belief.args";
import BeliefModel from "@web/generated/models/Belief";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

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
  const exists = await BeliefModel.exists(where);
  return exists ? updateBelief({ where, data }) : createBelief({ data });
  /*
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
  */
};
