import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../models/Categorization";
import { DateTimeScalar } from "../scalars";

@TypeGraphQL.ObjectType("Category", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Category extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  categorizations?: Categorization[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const CategoryModel = getModelForClass<typeof Category>(Category);
export default CategoryModel;
