/* Do not edit this file. It was generated programmatically. */

import { MantraCreationInput, MantraUpdateInput } from "@/graphql/generated/inputs/mantra.inputs";
import { date, InferType, object, SchemaOf, string } from "yup";

export const mantraCreationInputSchema: SchemaOf<MantraCreationInput> = object({
  userId: string().required(),
  content: string().required(),
  archivedAt: date().nullable().notRequired(),
});

export const mantraUpdateInputSchema: SchemaOf<MantraUpdateInput> = object({
  userId: string().notRequired(),
  content: string().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type MantraCreationInputSchemaType = InferType<typeof mantraCreationInputSchema>;
export type MantraUpdateInputSchemaType = InferType<typeof mantraUpdateInputSchema>;
