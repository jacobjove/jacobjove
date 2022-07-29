import { PaletteMode } from "@mui/material";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../models/Account";
import { Belief } from "../models/Belief";
import { BookReview } from "../models/BookReview";
import { Bookshelf } from "../models/Bookshelf";
import { Calendar } from "../models/Calendar";
import { Dashboard } from "../models/Dashboard";
import { Habit } from "../models/Habit";
import { Identity } from "../models/Identity";
import { List } from "../models/List";
import { Mantra } from "../models/Mantra";
import { Notebook } from "../models/Notebook";
import { NotebookUserPermission } from "../models/NotebookUserPermission";
import { Reading } from "../models/Reading";
import { Task } from "../models/Task";
import { Value } from "../models/Value";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

export interface UserSettings {
  colorMode?: PaletteMode;
  defaultCalendarId?: string;
}

export type UserInlineCollectionKey = "calendars" | "notebooks" | "mantras";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true,
})
export class User extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  email!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  emailVerified?: Date | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  image?: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isAdmin!: boolean;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  settings!: UserSettings;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  lastLogin?: Date | null;

  accounts?: Account[];

  calendars?: Calendar[];

  identities?: Identity[];

  values?: Value[];

  beliefs?: Belief[];

  mantras?: Mantra[];

  habits?: Habit[];

  tasks?: Task[];

  dashboards?: Dashboard[];

  notebooks?: Notebook[];

  notebookPermissions?: NotebookUserPermission[];

  lists?: List[];

  readings?: Reading[];

  bookshelves?: Bookshelf[];

  bookReviews?: BookReview[];
}
