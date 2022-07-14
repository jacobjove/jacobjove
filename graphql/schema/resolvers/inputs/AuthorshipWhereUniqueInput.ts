import * as TypeGraphQL from "type-graphql";
import { AuthorshipAuthorIdBookIdCompoundUniqueInput } from "../inputs/AuthorshipAuthorIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("AuthorshipWhereUniqueInput", {
  isAbstract: true,
})
export class AuthorshipWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipAuthorIdBookIdCompoundUniqueInput, {
    nullable: true,
  })
  authorId_bookId?: AuthorshipAuthorIdBookIdCompoundUniqueInput | undefined;
}
