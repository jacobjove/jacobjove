/* Do not edit this file. It was generated programmatically. */

import { BookCreationArgs, BookUpdateArgs } from "@/graphql/generated/args/book.args";
import { BookFragment } from "@/graphql/generated/fragments/book.fragment";
import {
  CREATE_BOOK,
  updateCacheAfterCreatingBook,
  UPDATE_BOOK,
} from "@/graphql/generated/mutations/book.mutations";
import {
  BookData,
  bookDataReducer,
  initializeBookData,
} from "@/graphql/generated/reducers/book.reducer";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useReducer } from "react";

type BookCreationMutationHookOptions = MutationHookOptions<
  { createBook: BookFragment },
  BookCreationArgs
>;

export const useCreateBook = (options?: BookCreationMutationHookOptions) => {
  return useHandleMutation<{ createBook: BookFragment }, BookCreationArgs>(CREATE_BOOK, {
    ...updateCacheAfterCreatingBook,
    ...(options ?? {}),
  });
};

type BookUpdateMutationHookOptions = MutationHookOptions<
  { updateBook: BookFragment },
  BookUpdateArgs
>;

export const useUpdateBook = (options?: BookUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateBook: BookFragment }, BookUpdateArgs>(UPDATE_BOOK, options);
};

export const useBookDataReducer = (data: BookData): [BookData, Dispatch<Payload<BookData>>] => {
  const initialData = initializeBookData(data);
  const [bookData, dispatchBookData] = useReducer(bookDataReducer, initialData, initializeBookData);
  return [bookData, dispatchBookData];
};
