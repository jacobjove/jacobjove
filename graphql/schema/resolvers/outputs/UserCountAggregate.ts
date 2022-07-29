import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("UserCountAggregate", {
  isAbstract: true,
})
export class UserCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  uid!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  email!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  emailVerified!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  image!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  isAdmin!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  settings!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  lastLogin!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
