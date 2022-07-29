import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BeliefCreateNestedManyWithoutUserInput } from "../inputs/BeliefCreateNestedManyWithoutUserInput";
import { BookReviewCreateNestedManyWithoutUserInput } from "../inputs/BookReviewCreateNestedManyWithoutUserInput";
import { BookshelfCreateNestedManyWithoutOwnerInput } from "../inputs/BookshelfCreateNestedManyWithoutOwnerInput";
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

@TypeGraphQL.InputType("UserCreateWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserCreateWithoutCalendarsInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  email!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  settings?: Record<string, string> | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin?: Date | undefined;

  @TypeGraphQL.Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => IdentityCreateNestedManyWithoutUserInput, { nullable: true })
  identities?: IdentityCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => ValueCreateNestedManyWithoutUserInput, { nullable: true })
  values?: ValueCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => BeliefCreateNestedManyWithoutUserInput, { nullable: true })
  beliefs?: BeliefCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => MantraCreateNestedManyWithoutUserInput, { nullable: true })
  mantras?: MantraCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateNestedManyWithoutUserInput, { nullable: true })
  habits?: HabitCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateNestedManyWithoutUserInput, { nullable: true })
  tasks?: TaskCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => DashboardCreateNestedManyWithoutUserInput, { nullable: true })
  dashboards?: DashboardCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => NotebookCreateNestedManyWithoutOwnerInput, { nullable: true })
  notebooks?: NotebookCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => ListCreateNestedManyWithoutOwnerInput, { nullable: true })
  lists?: ListCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => ReadingCreateNestedManyWithoutUserInput, { nullable: true })
  readings?: ReadingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => BookshelfCreateNestedManyWithoutOwnerInput, { nullable: true })
  bookshelves?: BookshelfCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateNestedManyWithoutUserInput, { nullable: true })
  bookReviews?: BookReviewCreateNestedManyWithoutUserInput | undefined;
}
