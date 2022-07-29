import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../enums/CalendarProvider";
import { Account } from "../models/Account";
import { CalendarEvent } from "../models/CalendarEvent";
import { User } from "../models/User";
import { CalendarCount } from "../resolvers/outputs/CalendarCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Calendar", {
  isAbstract: true,
})
export class Calendar extends Model {
  user?: User;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  color?: string | null;

  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  provider?: "google" | "apple" | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  remoteId?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken?: string | null;

  account?: Account | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  accountId?: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  primary?: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  public?: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  enabled?: boolean | null;

  events?: CalendarEvent[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => CalendarCount, { nullable: true })
  _count?: CalendarCount | null;
}
