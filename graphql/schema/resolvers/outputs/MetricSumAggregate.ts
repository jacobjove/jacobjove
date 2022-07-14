import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricSumAggregate", {
  isAbstract: true,
})
export class MetricSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
