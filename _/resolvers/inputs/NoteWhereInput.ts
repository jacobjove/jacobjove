import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookRelationFilter } from "../inputs/NotebookRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NoteWhereInput", { isAbstract: true })
export class NoteWhereInput {
  @TypeGraphQL.Field(() => [NoteWhereInput], { nullable: true })
  AND?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteWhereInput], { nullable: true })
  OR?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteWhereInput], { nullable: true })
  NOT?: NoteWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => NotebookRelationFilter, { nullable: true })
  notebook?: NotebookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
