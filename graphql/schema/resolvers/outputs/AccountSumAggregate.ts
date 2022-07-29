import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AccountSumAggregate", {
  isAbstract: true,
})
export class AccountSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;
}
