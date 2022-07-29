import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("DashboardAvgAggregate", {
  isAbstract: true,
})
export class DashboardAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId!: string | null;
}
