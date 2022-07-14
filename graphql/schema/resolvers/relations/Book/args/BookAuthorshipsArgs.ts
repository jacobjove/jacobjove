import * as TypeGraphQL from "type-graphql";
import { AuthorshipScalarFieldEnum } from "../../../../enums/AuthorshipScalarFieldEnum";
import { AuthorshipOrderByWithRelationInput } from "../../../inputs/AuthorshipOrderByWithRelationInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class BookAuthorshipsArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  where?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AuthorshipOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AuthorshipWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "authorId" | "bookId" | "position" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
