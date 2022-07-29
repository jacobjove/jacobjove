import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("DashboardSumAggregate", {
  isAbstract: true,
})
export class DashboardSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;
}
