import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricCreateManyInput", { isAbstract: true })
export class MetricCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;
}
