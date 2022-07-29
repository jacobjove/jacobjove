import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { BookshelfRelationFilter } from "../inputs/BookshelfRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ShelvingWhereInput", {
  isAbstract: true,
})
export class ShelvingWhereInput {
  @TypeGraphQL.Field((_type) => [ShelvingWhereInput], { nullable: true })
  AND?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereInput], { nullable: true })
  OR?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingWhereInput], { nullable: true })
  NOT?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BookshelfRelationFilter, { nullable: true })
  shelf?: BookshelfRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  shelfId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  rationale?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
