import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  emailVerified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  isAdmin?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonFilter, {
    nullable: true,
  })
  settings?: JsonFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  lastLogin?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarListRelationFilter, {
    nullable: true,
  })
  calendars?: CalendarListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => TaskListRelationFilter, {
    nullable: true,
  })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DashboardListRelationFilter, {
    nullable: true,
  })
  dashboards?: DashboardListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => NotebookListRelationFilter, {
    nullable: true,
  })
  notebooks?: NotebookListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionListRelationFilter, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ListListRelationFilter, {
    nullable: true,
  })
  lists?: ListListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ReadingListRelationFilter, {
    nullable: true,
  })
  readings?: ReadingListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => BookshelfListRelationFilter, {
    nullable: true,
  })
  bookshelves?: BookshelfListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => BookReviewListRelationFilter, {
    nullable: true,
  })
  bookReviews?: BookReviewListRelationFilter | undefined;
}
