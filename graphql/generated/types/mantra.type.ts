/* Do not edit this file. It was generated programmatically. */

import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import definition from "@/graphql/schema/definitions/Mantra";
import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { Model } from "@/graphql/schema/types";
import { ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
// import { MantraFragment } from "@/graphql/generated/fragments/mantra.fragment";

@TypeGraphQL.ObjectType()
@ModelOptions(DEFAULT_MODEL_OPTIONS)
@pre<Mantra>(
  "save",
  definition?.hooks?.save?.pre ??
    async function (next) {
      return next();
    }
)
@post<Mantra>(
  "save",
  definition?.hooks?.save?.post ??
    (async (_instance) => {
      return;
    })
)
@post<Mantra>("findOneAndUpdate", async function (result) {
  const rawResult = result as unknown as {
    value: typeof result;
    lastErrorObject: {
      updatedExisting: boolean;
    };
  };
  if (!rawResult.lastErrorObject || rawResult.lastErrorObject?.updatedExisting) return;
  definition?.hooks?.save?.post?.(rawResult.value);
})
export class Mantra extends Model {
  // declare readonly __types__: {
  //   fragment: MantraFragment;
  //   mutationResponses: {
  //     create: { createMantra: MantraFragment };
  //     update: { updateMantra: MantraFragment };
  //     upsert: { upsertMantra: MantraFragment };
  //     delete: { deleteMantra: MantraFragment };
  //   };
  // }
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ type: () => String, required: true })
  content!: string;
}
