import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricApplicationUpdateManyMutationInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
