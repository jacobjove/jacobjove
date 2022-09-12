import { postSave } from "@web/graphql/generated/types/ListItem/hooks";
import ListItemModel from "@web/graphql/generated/models/ListItemModel";
import {
  ListItemCreationArgs,
  ListItemUpsertionArgs,
} from "@web/graphql/generated/args/listItem.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createListItem = async (args: ListItemCreationArgs) => {
  const listItem = await ListItemModel.create(args);
  if (listItem) postSave(listItem);
  return listItem;
};

export const upsertListItem = async (args: ListItemUpsertionArgs) => {
  const { where, data } = args;
  const listItemUpsertResult = await ListItemModel.findOneAndUpdate(
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
  const listItem = listItemUpsertResult.value;
  if (listItem && !listItemUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(listItem);
  }
  return listItem;
};
