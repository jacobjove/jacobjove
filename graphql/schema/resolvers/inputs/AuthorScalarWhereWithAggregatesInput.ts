import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class AuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  slug?: StringWithAggregatesFilter | undefined;

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
