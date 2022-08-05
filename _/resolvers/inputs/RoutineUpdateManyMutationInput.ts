import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RoutineUpdateManyMutationInput", { isAbstract: true })
export class RoutineUpdateManyMutationInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
