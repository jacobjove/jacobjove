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

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  color?: string | null;

  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  provider?: "google" | "apple" | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken?: string | null;

  account?: Account | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accountId?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  primary?: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  enabled?: boolean | null;

  events?: CalendarEvent[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => CalendarCount, { nullable: true })
  _count?: CalendarCount | null;
}
