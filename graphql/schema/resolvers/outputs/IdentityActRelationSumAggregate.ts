import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityActRelationSumAggregate", {
  isAbstract: true,
})
export class IdentityActRelationSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  identityId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  actionId!: string | null;
}
