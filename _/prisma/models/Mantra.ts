import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";

@TypeGraphQL.ObjectType("Mantra", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Mantra extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  content!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const MantraModel = getModelForClass<typeof Mantra>(Mantra);
export default MantraModel;
