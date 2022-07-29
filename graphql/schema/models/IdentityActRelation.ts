import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Identity } from "../models/Identity";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("IdentityActRelation", {
  isAbstract: true,
})
export class IdentityActRelation extends Model {
  identity?: Identity;

  @TypeGraphQL.Field(() => String, { nullable: false })
  identityId!: string;

  action?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
