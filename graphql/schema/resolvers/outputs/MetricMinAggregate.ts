import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricMinAggregate", {
  isAbstract: true,
})
export class MetricMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;
}
