import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AuthorshipSumAggregate", {
  isAbstract: true,
})
export class AuthorshipSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  authorId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position!: number | null;
}
