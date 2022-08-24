/* Do not edit this file. It was generated programmatically. */

import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import definition from "@/graphql/schema/definitions/List";
import { JSONResolver, ObjectIdScalar } from "@/graphql/schema/scalars";
import { Model } from "@/graphql/schema/types";
import { ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
// import { ListFragment } from "@/graphql/generated/fragments/list.fragment";

@TypeGraphQL.ObjectType()
@ModelOptions(DEFAULT_MODEL_OPTIONS)
@pre<List>(
  "save",
  definition?.hooks?.save?.pre ??
    async function (next) {
      return next();
    }
)
@post<List>(
  "save",
  definition?.hooks?.save?.post ??
    (async (_instance) => {
      return;
    })
)
@post<List>("findOneAndUpdate", async function (result) {
  const rawResult = result as unknown as {
    value: typeof result;
    lastErrorObject: {
      updatedExisting: boolean;
    };
  };
  if (!rawResult.lastErrorObject || rawResult.lastErrorObject?.updatedExisting) return;
  definition?.hooks?.save?.post?.(rawResult.value);
})
export class List extends Model {
  // declare readonly __types__: {
  //   fragment: ListFragment;
  //   mutationResponses: {
  //     create: { createList: ListFragment };
  //     update: { updateList: ListFragment };
  //     upsert: { upsertList: ListFragment };
  //     delete: { deleteList: ListFragment };
  //   };
  // }
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ type: () => String, required: true })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ type: () => String, required: false, default: null })
  description?: string | null;

  @TypeGraphQL.Field(() => JSONResolver, { nullable: false })
  @Property({ required: true })
  fields!: Record<string, unknown>;
}
