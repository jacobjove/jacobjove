import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorshipScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class AuthorshipScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  authorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  bookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  position?: IntWithAggregatesFilter | undefined;

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
