import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricWhereUniqueInput", { isAbstract: true })
export class MetricWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;
}
