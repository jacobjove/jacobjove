import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookRelationFilter } from "../inputs/NotebookRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NoteWhereInput", {
  isAbstract: true,
})
export class NoteWhereInput {
  @TypeGraphQL.Field((_type) => [NoteWhereInput], { nullable: true })
  AND?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereInput], { nullable: true })
  OR?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereInput], { nullable: true })
  NOT?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => NotebookRelationFilter, { nullable: true })
  notebook?: NotebookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
