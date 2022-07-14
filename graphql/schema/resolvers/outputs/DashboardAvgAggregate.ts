import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("DashboardAvgAggregate", {
  isAbstract: true,
})
export class DashboardAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;
}
