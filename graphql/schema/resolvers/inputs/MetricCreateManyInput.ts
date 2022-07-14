import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("MetricCreateManyInput", {
  isAbstract: true,
})
export class MetricCreateManyInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;
}
