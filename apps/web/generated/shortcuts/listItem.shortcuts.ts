import { postCreate, postUpdate } from "@web/generated/types/ListItem/hooks";
import ListItemModel from "@web/generated/models/ListItemModel";
import UserModel from "@web/generated/models/UserModel";
import {
  ListItemCreationArgs,
  ListItemUpdateArgs,
  ListItemUpsertionArgs,
  FindUniqueListItemArgs,
} from "@web/graphql/generated/args/listItem.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findListItem = async ({ where }: FindUniqueListItemArgs) => {
  const filter = convertFilterForMongo(where);
  return ListItemModel.findOne(filter);
};

export const createListItem = async ({ data }: ListItemCreationArgs) => {
  const listItem = await ListItemModel.create(data);
  if (listItem) await postCreate(listItem);
  return listItem;
};

export const updateListItem = async ({ where, data }: ListItemUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const listItem = await ListItemModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  listItem &&
    (await UserModel.findOneAndUpdate(
      { _id: listItem.userId, "listItems._id": listItem._id },
      {
        $set: { "listItems.$": { ...listItem } },
      }
    ));
  if (listItem) await postUpdate(listItem);
  return listItem;
};

export const upsertListItem = async ({ where, data }: ListItemUpsertionArgs) => {
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
  if (listItem) {
    if (!listItemUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(listItem);
    } else {
      await postUpdate(listItem);
    }
  }
  return listItem;
};
