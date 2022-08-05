import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityActRelationSumAggregate", { isAbstract: true })
export class IdentityActRelationSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  identityId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actionId!: string | null;
}
