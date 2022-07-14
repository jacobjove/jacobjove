import * as TypeGraphQL from "type-graphql";
import { BookshelfScalarFieldEnum } from "../../../../enums/BookshelfScalarFieldEnum";
import { BookshelfOrderByWithAggregationInput } from "../../../inputs/BookshelfOrderByWithAggregationInput";
import { BookshelfScalarWhereWithAggregatesInput } from "../../../inputs/BookshelfScalarWhereWithAggregatesInput";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  where?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: BookshelfOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "ownerId"
    | "name"
    | "slug"
    | "isPublic"
    | "description"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => BookshelfScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BookshelfScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
