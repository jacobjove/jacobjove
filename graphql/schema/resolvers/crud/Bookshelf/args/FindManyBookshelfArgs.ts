import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfScalarFieldEnum } from "../../../../enums/BookshelfScalarFieldEnum";
import { BookshelfOrderByWithRelationInput } from "../../../inputs/BookshelfOrderByWithRelationInput";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfWhereInput, { nullable: true })
  where?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfOrderByWithRelationInput], { nullable: true })
  orderBy?: BookshelfOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, { nullable: true })
  cursor?: BookshelfWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "ownerId"
        | "name"
        | "slug"
        | "isPublic"
        | "description"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
