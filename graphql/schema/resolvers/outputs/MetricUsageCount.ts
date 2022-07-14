import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricUsageCount", {
  isAbstract: true,
})
export class MetricUsageCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  records!: number;
}
