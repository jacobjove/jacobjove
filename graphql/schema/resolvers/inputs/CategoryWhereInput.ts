import * as TypeGraphQL from "type-graphql";
import { CategorizationListRelationFilter } from "../inputs/CategorizationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategoryWhereInput", {
  isAbstract: true,
})
export class CategoryWhereInput {
  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  NOT?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => CategorizationListRelationFilter, {
    nullable: true,
  })
  categorizations?: CategorizationListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
