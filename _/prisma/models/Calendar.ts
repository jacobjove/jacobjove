import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../../graphql/schema/enums/CalendarProvider";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { Account } from "./Account";
import { CalendarEvent } from "./CalendarEvent";
import { User } from "./User";

@TypeGraphQL.ObjectType("Calendar", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Calendar extends Model {
  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  name?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  color?: string | null;

  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  @Property({ required: false })
  provider?: "google" | "apple" | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  remoteId?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  syncToken?: string | null;

  account?: Account | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  accountId?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  @Property({ required: false })
  primary?: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  @Property({ required: false })
  public?: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  @Property({ required: false, default: true })
  enabled?: boolean | null;

  events?: CalendarEvent[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}

const CalendarModel = getModelForClass<typeof Calendar>(Calendar);
export default CalendarModel;
