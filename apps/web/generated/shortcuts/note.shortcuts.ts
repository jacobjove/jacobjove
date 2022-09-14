import { postCreate, postUpdate } from "@web/generated/types/Note/hooks";
import NoteModel from "@web/generated/models/NoteModel";
import UserModel from "@web/generated/models/UserModel";
import {
  NoteCreationArgs,
  NoteUpdateArgs,
  NoteUpsertionArgs,
  FindUniqueNoteArgs,
} from "@web/graphql/generated/args/note.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findNote = async ({ where }: FindUniqueNoteArgs) => {
  const filter = convertFilterForMongo(where);
  return NoteModel.findOne(filter);
};

export const createNote = async ({ data }: NoteCreationArgs) => {
  const note = await NoteModel.create(data);
  if (note) await postCreate(note);
  return note;
};

export const updateNote = async ({ where, data }: NoteUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const note = await NoteModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  note &&
    (await UserModel.findOneAndUpdate(
      { _id: note.userId, "notes._id": note._id },
      {
        $set: { "notes.$": { ...note } },
      }
    ));
  if (note) await postUpdate(note);
  return note;
};

export const upsertNote = async ({ where, data }: NoteUpsertionArgs) => {
  const noteUpsertResult = await NoteModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const note = noteUpsertResult.value;
  if (note) {
    if (!noteUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(note);
    } else {
      await postUpdate(note);
    }
  }
  return note;
};
