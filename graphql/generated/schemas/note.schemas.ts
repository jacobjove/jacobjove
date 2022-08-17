/* Do not edit this file. It was generated programmatically. */

import { NoteCreationInput, NoteUpdateInput } from "@/graphql/generated/inputs/note.inputs";
import { bool, date, InferType, object, SchemaOf, string } from "yup";

export const noteCreationInputSchema: SchemaOf<NoteCreationInput> = object({
  userId: string().required(),
  notebookId: string().required(),
  title: string().required(),
  body: string()
    .nullable()
    .notRequired()
    .default(() => {
      return "";
    }),
  public: bool().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export const noteUpdateInputSchema: SchemaOf<NoteUpdateInput> = object({
  userId: string().notRequired(),
  notebookId: string().notRequired(),
  title: string().notRequired(),
  body: string().nullable().notRequired(),
  public: bool().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type NoteCreationInputSchemaType = InferType<typeof noteCreationInputSchema>;
export type NoteUpdateInputSchemaType = InferType<typeof noteUpdateInputSchema>;
