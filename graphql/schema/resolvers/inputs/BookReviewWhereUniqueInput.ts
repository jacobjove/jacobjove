import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookReviewWhereUniqueInput", {
  isAbstract: true,
})
export class BookReviewWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  readingId?: string | undefined;
}
