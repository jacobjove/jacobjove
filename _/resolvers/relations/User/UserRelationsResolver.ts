import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "@/graphql/schema/generated/models/account.model";
import { Belief } from "@/graphql/schema/generated/models/belief.model";
import { BookReview } from "@/graphql/schema/generated/models";
import { Bookshelf } from "@/graphql/schema/generated/models";
import { Calendar } from "@/graphql/schema/generated/models/calendar.model";
import { Dashboard } from "@/graphql/schema/generated/models/dashboard.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { Identity } from "@/graphql/schema/generated/models";
import { List } from "@/graphql/schema/generated/models";
import { Mantra } from "@/graphql/schema/generated/models/mantra.model";
import { Notebook } from "@/graphql/schema/generated/models/notebook.model";
import { NotebookUserPermission } from "@/graphql/schema/generated/models";
import { Reading } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";
import { Value } from "@/graphql/schema/generated/models/value.model";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserBeliefsArgs } from "./args/UserBeliefsArgs";
import { UserBookReviewsArgs } from "./args/UserBookReviewsArgs";
import { UserBookshelvesArgs } from "./args/UserBookshelvesArgs";
import { UserCalendarsArgs } from "./args/UserCalendarsArgs";
import { UserDashboardsArgs } from "./args/UserDashboardsArgs";
import { UserHabitsArgs } from "./args/UserHabitsArgs";
import { UserIdentitiesArgs } from "./args/UserIdentitiesArgs";
import { UserListsArgs } from "./args/UserListsArgs";
import { UserMantrasArgs } from "./args/UserMantrasArgs";
import { UserNotebookPermissionsArgs } from "./args/UserNotebookPermissionsArgs";
import { UserNotebooksArgs } from "./args/UserNotebooksArgs";
import { UserReadingsArgs } from "./args/UserReadingsArgs";
import { UserValuesArgs } from "./args/UserValuesArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [Account], { nullable: false })
  async accounts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserAccountsArgs
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserCalendarsArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Identity], { nullable: false })
  async identities(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserIdentitiesArgs
  ): Promise<Identity[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Value], { nullable: false })
  async values(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserValuesArgs
  ): Promise<Value[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Belief], { nullable: false })
  async beliefs(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserBeliefsArgs
  ): Promise<Belief[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Mantra], { nullable: false })
  async mantras(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserMantrasArgs
  ): Promise<Mantra[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Habit], { nullable: false })
  async habits(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserHabitsArgs
  ): Promise<Habit[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Dashboard], { nullable: false })
  async dashboards(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserDashboardsArgs
  ): Promise<Dashboard[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Notebook], { nullable: false })
  async notebooks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserNotebooksArgs
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [NotebookUserPermission], { nullable: false })
  async notebookPermissions(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserNotebookPermissionsArgs
  ): Promise<NotebookUserPermission[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [List], { nullable: false })
  async lists(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserListsArgs
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Reading], { nullable: false })
  async readings(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserReadingsArgs
  ): Promise<Reading[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Bookshelf], { nullable: false })
  async bookshelves(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserBookshelvesArgs
  ): Promise<Bookshelf[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [BookReview], { nullable: false })
  async bookReviews(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: UserBookReviewsArgs
  ): Promise<BookReview[]> {
    throw new Error("Not implemented");
  }
}
