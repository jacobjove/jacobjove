import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NoteScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class NoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [NoteScalarWhereWithAggregatesInput], { nullable: true })
  AND?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteScalarWhereWithAggregatesInput], { nullable: true })
  OR?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  notebookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  body?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPublic?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
