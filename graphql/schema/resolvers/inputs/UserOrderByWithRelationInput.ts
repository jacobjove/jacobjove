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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  settings?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  lastLogin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => AccountOrderByRelationAggregateInput, { nullable: true })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarOrderByRelationAggregateInput, { nullable: true })
  calendars?: CalendarOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentityOrderByRelationAggregateInput, { nullable: true })
  identities?: IdentityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ValueOrderByRelationAggregateInput, { nullable: true })
  values?: ValueOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => BeliefOrderByRelationAggregateInput, { nullable: true })
  beliefs?: BeliefOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitOrderByRelationAggregateInput, { nullable: true })
  habits?: HabitOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskOrderByRelationAggregateInput, { nullable: true })
  tasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => DashboardOrderByRelationAggregateInput, { nullable: true })
  dashboards?: DashboardOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookOrderByRelationAggregateInput, { nullable: true })
  notebooks?: NotebookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionOrderByRelationAggregateInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ListOrderByRelationAggregateInput, { nullable: true })
  lists?: ListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ReadingOrderByRelationAggregateInput, { nullable: true })
  readings?: ReadingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookshelfOrderByRelationAggregateInput, { nullable: true })
  bookshelves?: BookshelfOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewOrderByRelationAggregateInput, { nullable: true })
  bookReviews?: BookReviewOrderByRelationAggregateInput | undefined;
}
