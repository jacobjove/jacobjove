import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AccountCountAggregate", {
  isAbstract: true,
})
export class AccountCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  provider!: number;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  scopes!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  accessToken!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  refreshToken!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  accessTokenExpiry!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  syncToken!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
