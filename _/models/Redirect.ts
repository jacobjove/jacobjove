import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("Redirect", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Redirect extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  old_path!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  new_path!: string;
}

const RedirectModel = getModelForClass<typeof Redirect>(Redirect);
export default RedirectModel;
