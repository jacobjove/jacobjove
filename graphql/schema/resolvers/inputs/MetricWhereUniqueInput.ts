import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("MetricWhereUniqueInput", {
  isAbstract: true,
})
export class MetricWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;
}
