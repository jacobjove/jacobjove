import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotebookScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class NotebookScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [NotebookScalarWhereWithAggregatesInput], { nullable: true })
  AND?: NotebookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarWhereWithAggregatesInput], { nullable: true })
  OR?: NotebookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: NotebookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  ownerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPublic?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
