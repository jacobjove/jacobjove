import { MongoClient } from "mongodb";

declare global {
  let prisma: PrismaClient;
  let _mongoosePromise: Promise<MongoClient>;
}

declare type NoUndefinedField<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};

declare type NoNullField<T> = {
  [P in keyof T]-?: Exclude<T[P], null>;
};

declare type NoNullishField<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};
