import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricRecordUpdateManyMutationInput", { isAbstract: true })
export class MetricRecordUpdateManyMutationInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  value?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
