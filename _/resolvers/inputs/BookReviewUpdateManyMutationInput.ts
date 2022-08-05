import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookReviewUpdateManyMutationInput", { isAbstract: true })
export class BookReviewUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  review?: string | null | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rating?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
