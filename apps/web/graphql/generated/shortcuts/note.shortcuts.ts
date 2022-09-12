import { postSave } from "@web/graphql/generated/types/Note/hooks";
import NoteModel from "@web/graphql/generated/models/NoteModel";
import { NoteCreationArgs, NoteUpsertionArgs } from "@web/graphql/generated/args/note.args";

export const createNote = async (args: NoteCreationArgs) => {
  const note = await NoteModel.create(args);
  if (note) postSave(note);
  return note;
};

export const upsertNote = async (args: NoteUpsertionArgs) => {
  const { where, data } = args;
  const noteUpsertResult = await NoteModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const note = noteUpsertResult.value;
  if (note && !noteUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(note);
  }
  return note;
};
