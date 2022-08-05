import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategorizationSumAggregate", { isAbstract: true })
export class CategorizationSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  categoryId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;
}
