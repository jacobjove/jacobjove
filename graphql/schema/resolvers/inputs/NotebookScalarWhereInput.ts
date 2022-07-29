import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NotebookScalarWhereInput", {
  isAbstract: true,
})
export class NotebookScalarWhereInput {
  @TypeGraphQL.Field(() => [NotebookScalarWhereInput], { nullable: true })
  AND?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarWhereInput], { nullable: true })
  OR?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookScalarWhereInput], { nullable: true })
  NOT?: NotebookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
