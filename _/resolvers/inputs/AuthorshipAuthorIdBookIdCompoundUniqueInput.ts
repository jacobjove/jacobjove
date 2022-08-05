import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AuthorshipAuthorIdBookIdCompoundUniqueInput", { isAbstract: true })
export class AuthorshipAuthorIdBookIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  authorId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;
}
