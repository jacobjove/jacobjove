import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricUpdateManyMutationInput", {
  isAbstract: true,
})
export class MetricUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;
}
