import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionCountAggregate", { isAbstract: true })
export class ActionCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  start!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  end!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  notes!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
