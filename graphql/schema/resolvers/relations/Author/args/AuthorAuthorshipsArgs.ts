import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipScalarFieldEnum } from "../../../../enums/AuthorshipScalarFieldEnum";
import { AuthorshipOrderByWithRelationInput } from "../../../inputs/AuthorshipOrderByWithRelationInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AuthorAuthorshipsArgs {
  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  where?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field(() => [AuthorshipOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorshipOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: true })
  cursor?: AuthorshipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "authorId" | "bookId" | "position" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
