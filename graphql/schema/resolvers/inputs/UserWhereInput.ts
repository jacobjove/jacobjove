import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BookReviewListRelationFilter } from "../inputs/BookReviewListRelationFilter";
import { BookshelfListRelationFilter } from "../inputs/BookshelfListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CalendarListRelationFilter } from "../inputs/CalendarListRelationFilter";
import { DashboardListRelationFilter } from "../inputs/DashboardListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { ListListRelationFilter } from "../inputs/ListListRelationFilter";
import { NotebookListRelationFilter } from "../inputs/NotebookListRelationFilter";
import { NotebookUserPermissionListRelationFilter } from "../inputs/NotebookUserPermissionListRelationFilter";
import { ReadingListRelationFilter } from "../inputs/ReadingListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true,
})
export class UserWhereInput {
  @TypeGraphQL.Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  emailVerified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isAdmin?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  settings?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  lastLogin?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => AccountListRelationFilter, { nullable: true })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field(() => CalendarListRelationFilter, { nullable: true })
  calendars?: CalendarListRelationFilter | undefined;

  @TypeGraphQL.Field(() => TaskListRelationFilter, { nullable: true })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DashboardListRelationFilter, { nullable: true })
  dashboards?: DashboardListRelationFilter | undefined;

  @TypeGraphQL.Field(() => NotebookListRelationFilter, { nullable: true })
  notebooks?: NotebookListRelationFilter | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionListRelationFilter, { nullable: true })
  notebookPermissions?: NotebookUserPermissionListRelationFilter | undefined;

  @TypeGraphQL.Field(() => ListListRelationFilter, { nullable: true })
  lists?: ListListRelationFilter | undefined;

  @TypeGraphQL.Field(() => ReadingListRelationFilter, { nullable: true })
  readings?: ReadingListRelationFilter | undefined;

  @TypeGraphQL.Field(() => BookshelfListRelationFilter, { nullable: true })
  bookshelves?: BookshelfListRelationFilter | undefined;

  @TypeGraphQL.Field(() => BookReviewListRelationFilter, { nullable: true })
  bookReviews?: BookReviewListRelationFilter | undefined;
}
