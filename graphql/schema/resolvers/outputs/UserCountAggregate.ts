import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("UserCountAggregate", {
  isAbstract: true,
})
export class UserCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  uid!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  email!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  emailVerified!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  image!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  isAdmin!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  settings!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  lastLogin!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
