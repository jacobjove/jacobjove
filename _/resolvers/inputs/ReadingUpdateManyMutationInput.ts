import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ReadingUpdateManyMutationInput", { isAbstract: true })
export class ReadingUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  dateStarted?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  dateFinished?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
