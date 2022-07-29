import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityActRelationAvgAggregate", {
  isAbstract: true,
})
export class IdentityActRelationAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  identityId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actionId!: number | null;
}
