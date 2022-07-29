import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricRecordWhereUniqueInput", {
  isAbstract: true,
})
export class MetricRecordWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
