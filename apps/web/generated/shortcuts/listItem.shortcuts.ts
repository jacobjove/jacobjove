import {
  FindUniqueListItemArgs,
  ListItemCreationArgs,
  ListItemUpdateArgs,
  ListItemUpsertionArgs,
} from "@web/generated/graphql/args/listItem.args";
import ListItemModel from "@web/generated/models/ListItem";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findListItem = async ({ where }: FindUniqueListItemArgs) => {
  const filter = convertFilterForMongo(where);
  return ListItemModel.findOne(filter).lean({ virtuals: true });
};

export const createListItem = async ({ data }: ListItemCreationArgs) => {
  return ListItemModel.create([data]).then((results) => results[0]);
};

export const updateListItem = async ({ where, data }: ListItemUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await ListItemModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertListItem = async ({ where, data }: ListItemUpsertionArgs) => {
  const exists = await ListItemModel.exists(where);
  return exists ? updateListItem({ where, data }) : createListItem({ data });
  /*
  const result: ModifyResult<ListItem> = await ListItemModel.findOneAndUpdate(
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
