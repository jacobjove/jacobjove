import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityCountAggregate", {
  isAbstract: true,
})
export class IdentityCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  slug!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  description!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
