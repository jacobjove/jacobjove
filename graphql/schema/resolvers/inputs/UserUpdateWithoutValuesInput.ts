import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { BeliefUpdateManyWithoutUserInput } from "../inputs/BeliefUpdateManyWithoutUserInput";
import { BookReviewUpdateManyWithoutUserInput } from "../inputs/BookReviewUpdateManyWithoutUserInput";
import { BookshelfUpdateManyWithoutOwnerInput } from "../inputs/BookshelfUpdateManyWithoutOwnerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateManyWithoutUserInput } from "../inputs/CalendarUpdateManyWithoutUserInput";
import { DashboardUpdateManyWithoutUserInput } from "../inputs/DashboardUpdateManyWithoutUserInput";
import { HabitUpdateManyWithoutUserInput } from "../inputs/HabitUpdateManyWithoutUserInput";
import { IdentityUpdateManyWithoutUserInput } from "../inputs/IdentityUpdateManyWithoutUserInput";
import { ListUpdateManyWithoutOwnerInput } from "../inputs/ListUpdateManyWithoutOwnerInput";
import { MantraUpdateManyWithoutUserInput } from "../inputs/MantraUpdateManyWithoutUserInput";
import { NotebookUpdateManyWithoutOwnerInput } from "../inputs/NotebookUpdateManyWithoutOwnerInput";
import { NotebookUserPermissionUpdateManyWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutUserInput";
import { ReadingUpdateManyWithoutUserInput } from "../inputs/ReadingUpdateManyWithoutUserInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutValuesInput", {
  isAbstract: true,
})
export class UserUpdateWithoutValuesInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  email?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  emailVerified?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  image?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  settings?: Record<string, string> | undefined;

  @TypeGraphQL.Field({ nullable: true })
  lastLogin?: Date | null | undefined;

  @TypeGraphQL.Field(() => AccountUpdateManyWithoutUserInput, { nullable: true })
  accounts?: AccountUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => CalendarUpdateManyWithoutUserInput, { nullable: true })
  calendars?: CalendarUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => IdentityUpdateManyWithoutUserInput, { nullable: true })
  identities?: IdentityUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => BeliefUpdateManyWithoutUserInput, { nullable: true })
  beliefs?: BeliefUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => MantraUpdateManyWithoutUserInput, { nullable: true })
  mantras?: MantraUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateManyWithoutUserInput, { nullable: true })
  habits?: HabitUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateManyWithoutUserInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => DashboardUpdateManyWithoutUserInput, { nullable: true })
  dashboards?: DashboardUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateManyWithoutOwnerInput, { nullable: true })
  notebooks?: NotebookUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateManyWithoutUserInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => ListUpdateManyWithoutOwnerInput, { nullable: true })
  lists?: ListUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateManyWithoutUserInput, { nullable: true })
  readings?: ReadingUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => BookshelfUpdateManyWithoutOwnerInput, { nullable: true })
  bookshelves?: BookshelfUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => BookReviewUpdateManyWithoutUserInput, { nullable: true })
  bookReviews?: BookReviewUpdateManyWithoutUserInput | undefined;
}
