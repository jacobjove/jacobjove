import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookScalarFieldEnum } from "../../../../enums/BookScalarFieldEnum";
import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyBookArgs {
  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: BookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [BookScalarFieldEnum], { nullable: true })
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
