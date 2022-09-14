import { postCreate, postUpdate } from "@web/generated/types/Book/hooks";
import BookModel from "@web/generated/models/BookModel";
import {
  BookCreationArgs,
  BookUpdateArgs,
  BookUpsertionArgs,
  FindUniqueBookArgs,
} from "@web/graphql/generated/args/book.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findBook = async ({ where }: FindUniqueBookArgs) => {
  const filter = convertFilterForMongo(where);
  return BookModel.findOne(filter);
};

export const createBook = async ({ data }: BookCreationArgs) => {
  const book = await BookModel.create(data);
  if (book) await postCreate(book);
  return book;
};

export const updateBook = async ({ where, data }: BookUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const book = await BookModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  if (book) await postUpdate(book);
  return book;
};

export const upsertBook = async ({ where, data }: BookUpsertionArgs) => {
  const bookUpsertResult = await BookModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const book = bookUpsertResult.value;
  if (book) {
    if (!bookUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(book);
    } else {
      await postUpdate(book);
    }
  }
  return book;
};
