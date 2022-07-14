import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BookReviewCreateNestedManyWithoutUserInput } from "../inputs/BookReviewCreateNestedManyWithoutUserInput";
import { BookshelfCreateNestedManyWithoutOwnerInput } from "../inputs/BookshelfCreateNestedManyWithoutOwnerInput";
import { CalendarCreateNestedManyWithoutUserInput } from "../inputs/CalendarCreateNestedManyWithoutUserInput";
import { DashboardCreateNestedManyWithoutUserInput } from "../inputs/DashboardCreateNestedManyWithoutUserInput";
import { HabitCreateNestedManyWithoutUserInput } from "../inputs/HabitCreateNestedManyWithoutUserInput";
import { IdentityCreateNestedManyWithoutUserInput } from "../inputs/IdentityCreateNestedManyWithoutUserInput";
import { ListCreateNestedManyWithoutOwnerInput } from "../inputs/ListCreateNestedManyWithoutOwnerInput";
import { MantraCreateNestedManyWithoutUserInput } from "../inputs/MantraCreateNestedManyWithoutUserInput";
import { NotebookCreateNestedManyWithoutOwnerInput } from "../inputs/NotebookCreateNestedManyWithoutOwnerInput";
import { NotebookUserPermissionCreateNestedManyWithoutUserInput } from "../inputs/NotebookUserPermissionCreateNestedManyWithoutUserInput";
import { ReadingCreateNestedManyWithoutUserInput } from "../inputs/ReadingCreateNestedManyWithoutUserInput";
import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
import { ValueCreateNestedManyWithoutUserInput } from "../inputs/ValueCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserCreateWithoutBeliefsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  settings?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  lastLogin?: Date | undefined;

  @TypeGraphQL.Field((_type) => AccountCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  calendars?: CalendarCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  identities?: IdentityCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ValueCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  values?: ValueCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => MantraCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  mantras?: MantraCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  habits?: HabitCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  dashboards?: DashboardCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  notebooks?: NotebookCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ListCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  lists?: ListCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  readings?: ReadingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  bookshelves?: BookshelfCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  bookReviews?: BookReviewCreateNestedManyWithoutUserInput | undefined;
}
