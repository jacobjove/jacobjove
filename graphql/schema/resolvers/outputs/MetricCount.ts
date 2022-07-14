import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricCount", {
  isAbstract: true,
})
export class MetricCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  applications!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  usages!: number;
}
