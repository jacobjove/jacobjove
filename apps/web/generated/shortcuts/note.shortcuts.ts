import {
  FindUniqueNoteArgs,
  NoteCreationArgs,
  NoteUpdateArgs,
  NoteUpsertionArgs,
} from "@web/generated/graphql/args/note.args";
import NoteModel from "@web/generated/models/Note";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findNote = async ({ where }: FindUniqueNoteArgs) => {
  const filter = convertFilterForMongo(where);
  return NoteModel.findOne(filter).lean({ virtuals: true });
};

export const createNote = async ({ data }: NoteCreationArgs) => {
  return NoteModel.create([data]).then((results) => results[0]);
};

export const updateNote = async ({ where, data }: NoteUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await NoteModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertNote = async ({ where, data }: NoteUpsertionArgs) => {
  const exists = await NoteModel.exists(where);
  return exists ? updateNote({ where, data }) : createNote({ data });
  /*
  const result: ModifyResult<Note> = await NoteModel.findOneAndUpdate(
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
