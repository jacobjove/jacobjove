import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("CategorizationSumAggregate", { isAbstract: true })
export class CategorizationSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  categoryId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;
}
