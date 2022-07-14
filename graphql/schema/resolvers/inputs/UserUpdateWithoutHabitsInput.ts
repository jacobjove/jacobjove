import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { BeliefUpdateManyWithoutUserInput } from "../inputs/BeliefUpdateManyWithoutUserInput";
import { BookReviewUpdateManyWithoutUserInput } from "../inputs/BookReviewUpdateManyWithoutUserInput";
import { BookshelfUpdateManyWithoutOwnerInput } from "../inputs/BookshelfUpdateManyWithoutOwnerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateManyWithoutUserInput } from "../inputs/CalendarUpdateManyWithoutUserInput";
import { DashboardUpdateManyWithoutUserInput } from "../inputs/DashboardUpdateManyWithoutUserInput";
import { IdentityUpdateManyWithoutUserInput } from "../inputs/IdentityUpdateManyWithoutUserInput";
import { ListUpdateManyWithoutOwnerInput } from "../inputs/ListUpdateManyWithoutOwnerInput";
import { MantraUpdateManyWithoutUserInput } from "../inputs/MantraUpdateManyWithoutUserInput";
import { NotebookUpdateManyWithoutOwnerInput } from "../inputs/NotebookUpdateManyWithoutOwnerInput";
import { NotebookUserPermissionUpdateManyWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReadingUpdateManyWithoutUserInput } from "../inputs/ReadingUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
import { ValueUpdateManyWithoutUserInput } from "../inputs/ValueUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutHabitsInput", {
  isAbstract: true,
})
export class UserUpdateWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  uid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  settings?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastLogin?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarUpdateManyWithoutUserInput, {
    nullable: true,
  })
  calendars?: CalendarUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateManyWithoutUserInput, {
    nullable: true,
  })
  identities?: IdentityUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ValueUpdateManyWithoutUserInput, {
    nullable: true,
  })
  values?: ValueUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefUpdateManyWithoutUserInput, {
    nullable: true,
  })
  beliefs?: BeliefUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => MantraUpdateManyWithoutUserInput, {
    nullable: true,
  })
  mantras?: MantraUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateManyWithoutUserInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardUpdateManyWithoutUserInput, {
    nullable: true,
  })
  dashboards?: DashboardUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateManyWithoutOwnerInput, {
    nullable: true,
  })
  notebooks?: NotebookUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyWithoutUserInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ListUpdateManyWithoutOwnerInput, {
    nullable: true,
  })
  lists?: ListUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpdateManyWithoutUserInput, {
    nullable: true,
  })
  readings?: ReadingUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpdateManyWithoutOwnerInput, {
    nullable: true,
  })
  bookshelves?: BookshelfUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyWithoutUserInput, {
    nullable: true,
  })
  bookReviews?: BookReviewUpdateManyWithoutUserInput | undefined;
}
