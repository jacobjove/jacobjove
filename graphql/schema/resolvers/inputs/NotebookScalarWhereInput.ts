import * as TypeGraphQL from "type-graphql";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NotebookScalarWhereInput", {
  isAbstract: true,
})
export class NotebookScalarWhereInput {
  @TypeGraphQL.Field((_type) => [NotebookScalarWhereInput], {
    nullable: true,
  })
  AND?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookScalarWhereInput], {
    nullable: true,
  })
  OR?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookScalarWhereInput], {
    nullable: true,
  })
  NOT?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter | undefined;

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
