import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricCountAggregate", {
  isAbstract: true,
})
export class MetricCountAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  name!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  _all!: number;
}
