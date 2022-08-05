import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ShelvingUpdateManyMutationInput", { isAbstract: true })
export class ShelvingUpdateManyMutationInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  rationale?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
