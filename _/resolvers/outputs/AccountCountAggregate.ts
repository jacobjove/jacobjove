import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("AccountCountAggregate", { isAbstract: true })
export class AccountCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  provider!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  scopes!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  accessToken!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  refreshToken!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  accessTokenExpiry!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  syncToken!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
