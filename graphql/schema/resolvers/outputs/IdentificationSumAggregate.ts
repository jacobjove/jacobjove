import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentitySumAggregate", {
  isAbstract: true,
})
export class IdentitySumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  identityId!: string | null;
}
