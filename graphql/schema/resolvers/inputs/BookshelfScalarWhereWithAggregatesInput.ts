import * as TypeGraphQL from "type-graphql";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookshelfScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BookshelfScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [BookshelfScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: BookshelfScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: BookshelfScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookshelfScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: BookshelfScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  ownerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolWithAggregatesFilter, {
    nullable: true,
  })
  isPublic?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
