import { Timestamp } from "firebase/firestore";
import { GraphQLScalarType, Kind } from "graphql";
import { ObjectId } from "mongodb";
export { JSONResolver as JSON } from "graphql-scalars";
export { Int } from "type-graphql-v2-fork";
export { StringResolver as String };
export { BooleanResolver as Boolean };
export { ObjectIdScalar as ObjectId };
export { DateTimeScalar as DateTime };

const StringResolver = String;

const BooleanResolver = Boolean;

export const StringArray = [String];

export const ObjectIdScalar = new GraphQLScalarType({
  name: "ObjectId",
  description: "Mongo object id scalar type",
  parseValue(value) {
    // value from the client input variables
    if (typeof value !== "string") throw new Error(`Failed to parse: ${value}`);
    return new ObjectId(value);
  },
  serialize(value) {
    // value sent to the client
    if (value instanceof ObjectId) return value.toHexString();
    if (typeof value === "string") return value;
    throw new Error(`Failed to serialize: ${value}`);
  },
  parseLiteral(ast) {
    // value from the client query
    if (ast.kind === Kind.STRING) return new ObjectId(ast.value);
    return null;
  },
});

interface TimestampConstructor {
  seconds: number;
  nanoseconds: number;
}

export const DateTimeScalar = new GraphQLScalarType({
  name: "DateTimeISO",
  description:
    "The javascript `Date` as string. Type represents date and time as the ISO Date string.",
  serialize: (value: unknown): string => {
    // Return an ISO string.
    try {
      if (value instanceof Date) return value.toISOString();
      if (typeof value === "string") return new Date(value).toISOString();
      const timestamp = Object.prototype.hasOwnProperty.call(value, "toDate")
        ? (value as Timestamp)
        : new Timestamp(
            (value as TimestampConstructor).seconds,
            (value as TimestampConstructor).nanoseconds
          );
      return timestamp.toDate().toISOString();
    } catch (err) {
      throw new Error(
        `Failed to serialize time value: ${JSON.stringify(value)} (${typeof value}); ${err}`
      );
    }
  },
  parseValue: (value: unknown): Date => {
    // Return a Date instance.
    try {
      return value instanceof Date ? value : new Date(value as string);
    } catch (err) {
      throw new Error(`Failed to parse time value: ${JSON.stringify(value)} (${typeof value})`);
    }
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    throw new Error("Invalid date value");
  },
});
