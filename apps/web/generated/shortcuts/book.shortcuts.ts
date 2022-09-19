import {
  BookCreationArgs,
  BookUpdateArgs,
  BookUpsertionArgs,
  FindUniqueBookArgs,
} from "@web/generated/graphql/args/book.args";
import { Book } from "@web/generated/interfaces/Book";
import BookModel from "@web/generated/models/Book";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findBook = async ({ where }: FindUniqueBookArgs) => {
  const filter = convertFilterForMongo(where);
  return BookModel.findOne(filter).lean({ virtuals: true });
};

export const createBook = async ({ data }: BookCreationArgs) => {
  return BookModel.create([data]).then((results) => results[0]);
};

export const updateBook = async ({ where, data }: BookUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await BookModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertBook = async ({ where, data }: BookUpsertionArgs) => {
  const result: ModifyResult<Book> = await BookModel.findOneAndUpdate(
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
