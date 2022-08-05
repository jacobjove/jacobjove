import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricUsageUpdateManyMutationInput", { isAbstract: true })
export class MetricUsageUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
