import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookReviewWhereUniqueInput", {
  isAbstract: true,
})
export class BookReviewWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  readingId?: string | undefined;
}
