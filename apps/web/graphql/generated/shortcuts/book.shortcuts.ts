import { postSave } from "@web/graphql/generated/types/Book/hooks";
import BookModel from "@web/graphql/generated/models/BookModel";
import { BookCreationArgs, BookUpsertionArgs } from "@web/graphql/generated/args/book.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createBook = async (args: BookCreationArgs) => {
  const book = await BookModel.create(args);
  if (book) postSave(book);
  return book;
};

export const upsertBook = async (args: BookUpsertionArgs) => {
  const { where, data } = args;
  const bookUpsertResult = await BookModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const book = bookUpsertResult.value;
  if (book && !bookUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(book);
  }
  return book;
};
