import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectIdScalar } from "../../../graphql/schema/scalars";
import { IdentityActRelation } from "./IdentityActRelation";
import { User } from "./User";

@TypeGraphQL.ObjectType("Identity", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Identity extends Model {
  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  identities?: Identity[];

  actionRelations?: IdentityActRelation[];
}

const IdentityModel = getModelForClass<typeof Identity>(Identity);
export default IdentityModel;
