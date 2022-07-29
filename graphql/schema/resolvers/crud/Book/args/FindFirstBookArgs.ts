import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookScalarFieldEnum } from "../../../../enums/BookScalarFieldEnum";
import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstBookArgs {
  @TypeGraphQL.Field((_type) => BookWhereInput, { nullable: true })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: BookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, { nullable: true })
  cursor?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [BookScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "isbn"
        | "isbn13"
        | "title"
        | "slug"
        | "description"
        | "authorNames"
        | "authorNamesLf"
        | "publicationYear"
        | "originalPublicationYear"
        | "extra"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
