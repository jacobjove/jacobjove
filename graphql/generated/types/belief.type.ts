/* Do not edit this file. It was generated programmatically. */

import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import definition from "@/graphql/schema/definitions/Belief";
import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { Model } from "@/graphql/schema/types";
import { ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
// import { BeliefFragment } from "@/graphql/generated/fragments/belief.fragment";

@TypeGraphQL.ObjectType()
@ModelOptions(DEFAULT_MODEL_OPTIONS)
@pre<Belief>(
  "save",
  definition?.hooks?.save?.pre ??
    async function (next) {
      return next();
    }
)
@post<Belief>(
  "save",
  definition?.hooks?.save?.post ??
    (async (_instance) => {
      return;
    })
)
@post<Belief>("findOneAndUpdate", async function (result) {
  const rawResult = result as unknown as {
    value: typeof result;
    lastErrorObject: {
      updatedExisting: boolean;
    };
  };
  if (!rawResult.lastErrorObject || rawResult.lastErrorObject?.updatedExisting) return;
  definition?.hooks?.save?.post?.(rawResult.value);
})
export class Belief extends Model {
  // declare readonly __types__: {
  //   fragment: BeliefFragment;
  //   mutationResponses: {
  //     create: { createBelief: BeliefFragment };
  //     update: { updateBelief: BeliefFragment };
  //     upsert: { upsertBelief: BeliefFragment };
  //     delete: { deleteBelief: BeliefFragment };
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
}
