import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipAuthorIdBookIdCompoundUniqueInput } from "../inputs/AuthorshipAuthorIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("AuthorshipWhereUniqueInput", { isAbstract: true })
export class AuthorshipWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => AuthorshipAuthorIdBookIdCompoundUniqueInput, { nullable: true })
  authorId_bookId?: AuthorshipAuthorIdBookIdCompoundUniqueInput | undefined;
}
