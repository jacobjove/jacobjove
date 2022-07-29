import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AccountAvgAggregate", {
  isAbstract: true,
})
export class AccountAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;
}
