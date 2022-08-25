import { WhereInput, WhereUniqueInput } from "@/graphql/schema/types";
import { ObjectId } from "mongodb";

declare type ReturnVoid = void | Promise<void>;
export type HookNextErrorFn = (err?: Error) => ReturnVoid;

export async function preSave(next: HookNextErrorFn) {
  return next();
}

export async function postSave(_instance: unknown) {
  return;
}

// export async function postFindOneAndUpdate(result: unknown) {
//   const rawResult = result as unknown as {
//     value: typeof result;
//     lastErrorObject: {
//       updatedExisting: boolean;
//     }
//   };
//   if (!rawResult.lastErrorObject || rawResult.lastErrorObject?.updatedExisting) return;
//   postSave(rawResult.value);
// }

type ModifiedFilter<T extends WhereUniqueInput> = Omit<T, "id"> & { _id?: ObjectId };

export function convertFilterForMongo(filter: undefined): undefined;
export function convertFilterForMongo<T extends WhereInput>(filter: T | undefined): T | undefined;
export function convertFilterForMongo<T extends WhereUniqueInput>(filter: T): ModifiedFilter<T>;
export function convertFilterForMongo<T extends WhereUniqueInput>(
  filter: T | undefined
): T | ModifiedFilter<T> | undefined {
  if (filter === undefined) return undefined;
  let modifiedFilter = Object.fromEntries(
    Object.entries(filter).filter(([, value]) => {
      return value !== undefined;
    })
  );
  if (modifiedFilter.id) modifiedFilter = { _id: modifiedFilter.id };
  // console.log("Modified filter:", modifiedFilter);
  return modifiedFilter as ModifiedFilter<T>;
}
