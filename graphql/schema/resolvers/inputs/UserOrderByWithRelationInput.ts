import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { BeliefOrderByRelationAggregateInput } from "../inputs/BeliefOrderByRelationAggregateInput";
import { BookReviewOrderByRelationAggregateInput } from "../inputs/BookReviewOrderByRelationAggregateInput";
import { BookshelfOrderByRelationAggregateInput } from "../inputs/BookshelfOrderByRelationAggregateInput";
import { CalendarOrderByRelationAggregateInput } from "../inputs/CalendarOrderByRelationAggregateInput";
import { DashboardOrderByRelationAggregateInput } from "../inputs/DashboardOrderByRelationAggregateInput";
import { HabitOrderByRelationAggregateInput } from "../inputs/HabitOrderByRelationAggregateInput";
import { IdentityOrderByRelationAggregateInput } from "../inputs/IdentityOrderByRelationAggregateInput";
import { ListOrderByRelationAggregateInput } from "../inputs/ListOrderByRelationAggregateInput";
import { NotebookOrderByRelationAggregateInput } from "../inputs/NotebookOrderByRelationAggregateInput";
import { NotebookUserPermissionOrderByRelationAggregateInput } from "../inputs/NotebookUserPermissionOrderByRelationAggregateInput";
import { ReadingOrderByRelationAggregateInput } from "../inputs/ReadingOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { ValueOrderByRelationAggregateInput } from "../inputs/ValueOrderByRelationAggregateInput";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true,
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  settings?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  lastLogin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AccountOrderByRelationAggregateInput, { nullable: true })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarOrderByRelationAggregateInput, { nullable: true })
  calendars?: CalendarOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityOrderByRelationAggregateInput, { nullable: true })
  identities?: IdentityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ValueOrderByRelationAggregateInput, { nullable: true })
  values?: ValueOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefOrderByRelationAggregateInput, { nullable: true })
  beliefs?: BeliefOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByRelationAggregateInput, { nullable: true })
  habits?: HabitOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => TaskOrderByRelationAggregateInput, { nullable: true })
  tasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardOrderByRelationAggregateInput, { nullable: true })
  dashboards?: DashboardOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookOrderByRelationAggregateInput, { nullable: true })
  notebooks?: NotebookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionOrderByRelationAggregateInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ListOrderByRelationAggregateInput, { nullable: true })
  lists?: ListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingOrderByRelationAggregateInput, { nullable: true })
  readings?: ReadingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfOrderByRelationAggregateInput, { nullable: true })
  bookshelves?: BookshelfOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewOrderByRelationAggregateInput, { nullable: true })
  bookReviews?: BookReviewOrderByRelationAggregateInput | undefined;
}
