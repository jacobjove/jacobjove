import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AuthorshipAuthorIdBookIdCompoundUniqueInput", {
  isAbstract: true,
})
export class AuthorshipAuthorIdBookIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  authorId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;
}
