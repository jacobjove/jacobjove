import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Category } from "../models/Category";
import { DateTimeScalar } from "../scalars";

@TypeGraphQL.ObjectType("Categorization", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Categorization extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  categoryId!: string;

  category?: Category;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const CategorizationModel = getModelForClass<typeof Categorization>(Categorization);
export default CategorizationModel;
