import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricAvgAggregate", {
  isAbstract: true,
})
export class MetricAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
