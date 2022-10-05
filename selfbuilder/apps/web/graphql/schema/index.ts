/* eslint-disable import/order */
// organize-imports-ignore
// NOTE: Reflection must be imported at the top!
import "@abraham/reflection";

import { buildSchema, NonEmptyArray, MiddlewareFn } from "type-graphql-v2-fork";
import { Model } from "mongoose";
import * as resolvers from "@web/generated/graphql/resolvers";

const IS_DEV = process.env.NODE_ENV === "development";

const MongooseMiddlware: MiddlewareFn = async (_, next) => {
  const result = await next();
  if (result instanceof Model) {
    return result.toObject();
  } else if (Array.isArray(result)) {
    return result.map((item) => (item instanceof Model ? item.toObject() : item));
  }
  return result;
};

export const schemaPromise = buildSchema({
  resolvers: Object.values(resolvers) as unknown as NonEmptyArray<CallableFunction>,
  emitSchemaFile: IS_DEV ? { path: `${process.env.BASE_DIR}/graphql/schema.gql` } : false,
  validate: false, // TODO: investigate
  globalMiddlewares: [MongooseMiddlware],
});
