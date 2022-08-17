/* Do not edit this file. It was generated programmatically. */

import {
  AccountCreationInput,
  AccountUpdateInput,
} from "@/graphql/generated/inputs/account.inputs";
import { array, date, InferType, object, SchemaOf, string } from "yup";

export const accountCreationInputSchema: SchemaOf<AccountCreationInput> = object({
  userId: string().required(),
  provider: string().required(),
  remoteId: string().required(),
  scopes: array().of(string().required()).required(),
  accessToken: string().nullable().notRequired(),
  refreshToken: string().nullable().notRequired(),
  accessTokenExpiry: date().nullable().notRequired(),
  syncToken: string().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export const accountUpdateInputSchema: SchemaOf<AccountUpdateInput> = object({
  userId: string().notRequired(),
  provider: string().notRequired(),
  remoteId: string().notRequired(),
  scopes: array().of(string()).notRequired(),
  accessToken: string().nullable().notRequired(),
  refreshToken: string().nullable().notRequired(),
  accessTokenExpiry: date().nullable().notRequired(),
  syncToken: string().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type AccountCreationInputSchemaType = InferType<typeof accountCreationInputSchema>;
export type AccountUpdateInputSchemaType = InferType<typeof accountUpdateInputSchema>;
