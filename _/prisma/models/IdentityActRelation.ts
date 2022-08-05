import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Act } from "./Act";
import { Identity } from "./Identity";

@TypeGraphQL.ObjectType("IdentityActRelation", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class IdentityActRelation extends Model {
  identity?: Identity;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  identityId!: string;

  action?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  actionId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const IdentityActRelationModel = getModelForClass<typeof IdentityActRelation>(IdentityActRelation);
export default IdentityActRelationModel;
