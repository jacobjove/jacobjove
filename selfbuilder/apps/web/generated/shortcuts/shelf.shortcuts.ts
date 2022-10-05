import {
  FindUniqueShelfArgs,
  ShelfCreationArgs,
  ShelfUpdateArgs,
  ShelfUpsertionArgs,
} from "@web/generated/graphql/args/shelf.args";
import ShelfModel from "@web/generated/models/Shelf";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findShelf = async ({ where }: FindUniqueShelfArgs) => {
  const filter = convertFilterForMongo(where);
  return ShelfModel.findOne(filter).lean({ virtuals: true });
};

export const createShelf = async ({ data }: ShelfCreationArgs) => {
  return ShelfModel.create([data]).then((results) => results[0]);
};

export const updateShelf = async ({ where, data }: ShelfUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await ShelfModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertShelf = async ({ where, data }: ShelfUpsertionArgs) => {
  const exists = await ShelfModel.exists(where);
  return exists ? updateShelf({ where, data }) : createShelf({ data });
  /*
  const result: ModifyResult<Shelf> = await ShelfModel.findOneAndUpdate(
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
