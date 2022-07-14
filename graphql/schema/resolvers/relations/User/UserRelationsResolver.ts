import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { resolveUserRelation } from "../../../helpers";
import { Account } from "../../../models/Account";
import { Belief } from "../../../models/Belief";
import { BookReview } from "../../../models/BookReview";
import { Bookshelf } from "../../../models/Bookshelf";
import { Calendar } from "../../../models/Calendar";
import { Dashboard } from "../../../models/Dashboard";
import { Habit } from "../../../models/Habit";
import { Identity } from "../../../models/Identity";
import { List } from "../../../models/List";
import { Mantra } from "../../../models/Mantra";
import { Notebook } from "../../../models/Notebook";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { Reading } from "../../../models/Reading";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { Value } from "../../../models/Value";
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
import { UserTasksArgs } from "./args/UserTasksArgs";
import { UserValuesArgs } from "./args/UserValuesArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Account], {
    nullable: false,
  })
  async accounts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserAccountsArgs
  ): Promise<Account[]> {
    return resolveUserRelation("accounts", user, ctx, args) as Promise<Account[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Calendar], {
    nullable: false,
  })
  async calendars(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserCalendarsArgs
  ): Promise<Calendar[]> {
    return user.calendars
      ? user.calendars
      : (resolveUserRelation("calendars", user, ctx, args) as Promise<Calendar[]>);
  }

  @TypeGraphQL.FieldResolver((_type) => [Identity], {
    nullable: false,
  })
  async identities(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserIdentitiesArgs
  ): Promise<Identity[]> {
    return resolveUserRelation("identities", user, ctx, args) as Promise<Identity[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Value], {
    nullable: false,
  })
  async values(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserValuesArgs
  ): Promise<Value[]> {
    return resolveUserRelation("values", user, ctx, args) as Promise<Value[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Belief], {
    nullable: false,
  })
  async beliefs(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserBeliefsArgs
  ): Promise<Belief[]> {
    return resolveUserRelation("beliefs", user, ctx, args) as Promise<Belief[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Mantra], {
    nullable: false,
  })
  async mantras(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserMantrasArgs
  ): Promise<Mantra[]> {
    return resolveUserRelation("mantras", user, ctx, args) as Promise<Mantra[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Habit], {
    nullable: false,
  })
  async habits(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserHabitsArgs
  ): Promise<Habit[]> {
    return resolveUserRelation("habits", user, ctx, args) as Promise<Habit[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Task], {
    nullable: false,
  })
  async tasks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserTasksArgs
  ): Promise<Task[]> {
    return resolveUserRelation("tasks", user, ctx, args) as Promise<Task[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Dashboard], {
    nullable: false,
  })
  async dashboards(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserDashboardsArgs
  ): Promise<Dashboard[]> {
    return resolveUserRelation("dashboards", user, ctx, args) as Promise<Dashboard[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Notebook], {
    nullable: false,
  })
  async notebooks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserNotebooksArgs
  ): Promise<Notebook[]> {
    return resolveUserRelation("notebooks", user, ctx, args) as Promise<Notebook[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [NotebookUserPermission], {
    nullable: false,
  })
  async notebookPermissions(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserNotebookPermissionsArgs
  ): Promise<NotebookUserPermission[]> {
    return resolveUserRelation("notebookPermissions", user, ctx, args) as Promise<
      NotebookUserPermission[]
    >;
  }

  @TypeGraphQL.FieldResolver((_type) => [List], {
    nullable: false,
  })
  async lists(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserListsArgs
  ): Promise<List[]> {
    return resolveUserRelation("lists", user, ctx, args) as Promise<List[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Reading], {
    nullable: false,
  })
  async readings(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserReadingsArgs
  ): Promise<Reading[]> {
    return resolveUserRelation("readings", user, ctx, args) as Promise<Reading[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [Bookshelf], {
    nullable: false,
  })
  async bookshelves(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserBookshelvesArgs
  ): Promise<Bookshelf[]> {
    return resolveUserRelation("bookshelves", user, ctx, args) as Promise<Bookshelf[]>;
  }

  @TypeGraphQL.FieldResolver((_type) => [BookReview], {
    nullable: false,
  })
  async bookReviews(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: UserBookReviewsArgs
  ): Promise<BookReview[]> {
    return resolveUserRelation("bookReviews", user, ctx, args) as Promise<BookReview[]>;
  }
}
