import * as TypeGraphQL from "type-graphql";
import { BookScalarFieldEnum } from "../../../../enums/BookScalarFieldEnum";
import { BookOrderByWithAggregationInput } from "../../../inputs/BookOrderByWithAggregationInput";
import { BookScalarWhereWithAggregatesInput } from "../../../inputs/BookScalarWhereWithAggregatesInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByBookArgs {
  @TypeGraphQL.Field((_type) => BookWhereInput, {
    nullable: true,
  })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BookOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: BookOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "ids"
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
  >;

  @TypeGraphQL.Field((_type) => BookScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BookScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
