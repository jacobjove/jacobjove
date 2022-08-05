import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarCountAggregate", { isAbstract: true })
export class CalendarCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  uid!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  color!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  provider!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  syncToken!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  accountId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  primary!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  public!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  enabled!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
