import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { PaletteMode } from "@mui/material";
import { getModelForClass, ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import bcrypt from "bcryptjs";
import { IsEmail } from "class-validator";
import * as GraphQLScalars from "graphql-scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { Account } from "./Account";
import { Belief } from "./Belief";
import { BookReview } from "./BookReview";
import { Bookshelf } from "./Bookshelf";
import CalendarModel, { Calendar } from "./Calendar";
import { Dashboard } from "./Dashboard";
import { Habit } from "./Habit";
import { Identity } from "./Identity";
import { List } from "./List";
import { Mantra } from "./Mantra";
import { Notebook } from "./Notebook";
import { NotebookUserPermission } from "./NotebookUserPermission";
import { Reading } from "./Reading";
import { Task } from "./Task";
import { Value } from "./Value";

// import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
// import { BeliefCreateNestedManyWithoutUserInput } from "../inputs/BeliefCreateNestedManyWithoutUserInput";
// import { BookReviewCreateNestedManyWithoutUserInput } from "../inputs/BookReviewCreateNestedManyWithoutUserInput";
// import { BookshelfCreateNestedManyWithoutOwnerInput } from "../inputs/BookshelfCreateNestedManyWithoutOwnerInput";
// import { CalendarCreateNestedManyWithoutUserInput } from "../inputs/CalendarCreateNestedManyWithoutUserInput";
// import { DashboardCreateNestedManyWithoutUserInput } from "../inputs/DashboardCreateNestedManyWithoutUserInput";
// import { HabitCreateNestedManyWithoutUserInput } from "../inputs/HabitCreateNestedManyWithoutUserInput";
// import { IdentityCreateNestedManyWithoutUserInput } from "../inputs/IdentityCreateNestedManyWithoutUserInput";
// import { ListCreateNestedManyWithoutOwnerInput } from "../inputs/ListCreateNestedManyWithoutOwnerInput";
// import { NotebookCreateNestedManyWithoutOwnerInput } from "../inputs/NotebookCreateNestedManyWithoutOwnerInput";
// import { NotebookUserPermissionCreateNestedManyWithoutUserInput } from "../inputs/NotebookUserPermissionCreateNestedManyWithoutUserInput";
// import { ReadingCreateNestedManyWithoutUserInput } from "../inputs/ReadingCreateNestedManyWithoutUserInput";
// import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
// import { ValueCreateNestedManyWithoutUserInput } from "../inputs/ValueCreateNestedManyWithoutUserInput";

const COST_FACTOR = 12;

export interface UserSettings {
  colorMode?: PaletteMode;
  defaultCalendarId?: ObjectId;
}

export type UserInlineCollectionKey = "calendars" | "notebooks" | "mantras";

@TypeGraphQL.ObjectType("User", { isAbstract: true })
@pre<User>("save", async function (next) {
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, COST_FACTOR);
  }
  return next();
})
@post<User>("save", async (user) => {
  if (!user.calendars?.length) {
    const defaultCalendar = await CalendarModel.create({
      userId: user.id,
      name: "Default calendar",
    });
    user.calendars = [defaultCalendar];
    user.markModified("calendars");
    user.settings.defaultCalendarId = defaultCalendar.id;
    user.markModified("settings");
    user.save();
  }
})
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class User extends Model {
  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  name?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true, unique: true })
  email!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  emailVerified?: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  image?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true, default: false })
  isAdmin!: boolean;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  @Property({ required: true, default: {} })
  settings!: UserSettings;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  lastLogin?: Date | null;

  // @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false, select: false })
  password?: string | null;

  @TypeGraphQL.Field(() => [Account], { nullable: false })
  @Property({ required: true, default: [] })
  accounts!: Account[];

  @TypeGraphQL.Field(() => [Calendar], { nullable: false })
  @Property({ required: true, default: [] })
  calendars!: Calendar[];

  @TypeGraphQL.Field(() => [Identity], { nullable: false })
  @Property({ required: true, default: [] })
  identities!: Identity[];

  @TypeGraphQL.Field(() => [Value], { nullable: false })
  @Property({ required: true, default: [] })
  values!: Value[];

  @TypeGraphQL.Field(() => [Belief], { nullable: false })
  @Property({ required: true, default: [] })
  beliefs!: Belief[];

  @TypeGraphQL.Field(() => [Mantra], { nullable: false })
  @Property({ required: true, default: [] })
  mantras!: Mantra[];

  @TypeGraphQL.Field(() => [Habit], { nullable: false })
  @Property({ required: true, default: [] })
  habits!: Habit[];

  @TypeGraphQL.Field(() => [Task], { nullable: true })
  @Property({ required: false, default: [] })
  tasks!: Task[];

  @TypeGraphQL.Field(() => [Dashboard], { nullable: true })
  @Property({ required: false, default: [] })
  dashboards!: Dashboard[];

  @TypeGraphQL.Field(() => [Notebook], { nullable: true })
  @Property({ required: false, default: [] })
  notebooks!: Notebook[];

  notebookPermissions?: NotebookUserPermission[];

  @TypeGraphQL.Field(() => [List], { nullable: true })
  @Property({ required: false, default: [] })
  lists?: List[];

  readings?: Reading[];

  bookshelves?: Bookshelf[];

  bookReviews?: BookReview[];
}

const UserModel = getModelForClass<typeof User>(User);
export default UserModel;

@TypeGraphQL.InputType()
export class CreateUserInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @IsEmail()
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

  // @TypeGraphQL.Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  // accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => CalendarCreateNestedManyWithoutUserInput, { nullable: true })
  // calendars?: CalendarCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => IdentityCreateNestedManyWithoutUserInput, { nullable: true })
  // identities?: IdentityCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => ValueCreateNestedManyWithoutUserInput, { nullable: true })
  // values?: ValueCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => BeliefCreateNestedManyWithoutUserInput, { nullable: true })
  // beliefs?: BeliefCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => MantraCreateNestedManyWithoutUserInput, {
  //   nullable: true,
  // })
  // mantras?: MantraCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => HabitCreateNestedManyWithoutUserInput, { nullable: true })
  // habits?: HabitCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => TaskCreateNestedManyWithoutUserInput, { nullable: true })
  // tasks?: TaskCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => DashboardCreateNestedManyWithoutUserInput, { nullable: true })
  // dashboards?: DashboardCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => NotebookCreateNestedManyWithoutOwnerInput, { nullable: true })
  // notebooks?: NotebookCreateNestedManyWithoutOwnerInput | undefined;

  // @TypeGraphQL.Field(() => NotebookUserPermissionCreateNestedManyWithoutUserInput, {
  //   nullable: true,
  // })
  // notebookPermissions?: NotebookUserPermissionCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => ListCreateNestedManyWithoutOwnerInput, { nullable: true })
  // lists?: ListCreateNestedManyWithoutOwnerInput | undefined;

  // @TypeGraphQL.Field(() => ReadingCreateNestedManyWithoutUserInput, { nullable: true })
  // readings?: ReadingCreateNestedManyWithoutUserInput | undefined;

  // @TypeGraphQL.Field(() => BookshelfCreateNestedManyWithoutOwnerInput, { nullable: true })
  // bookshelves?: BookshelfCreateNestedManyWithoutOwnerInput | undefined;

  // @TypeGraphQL.Field(() => BookReviewCreateNestedManyWithoutUserInput, { nullable: true })
  // bookReviews?: BookReviewCreateNestedManyWithoutUserInput | undefined;
}

@TypeGraphQL.InputType()
export class UpdateUserInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @IsEmail()
  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string;

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
}

@TypeGraphQL.InputType()
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id?: ObjectId | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;
}
