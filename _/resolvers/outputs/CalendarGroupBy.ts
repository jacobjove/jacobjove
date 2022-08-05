import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";
import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";

@TypeGraphQL.ObjectType("CalendarGroupBy", { isAbstract: true })
export class CalendarGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  uid!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  color!: string | null;

  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  provider!: "google" | "apple" | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accountId!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  primary!: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public!: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  enabled!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => CalendarCountAggregate, { nullable: true })
  _count!: CalendarCountAggregate | null;

  @TypeGraphQL.Field(() => CalendarAvgAggregate, { nullable: true })
  _avg!: CalendarAvgAggregate | null;

  @TypeGraphQL.Field(() => CalendarSumAggregate, { nullable: true })
  _sum!: CalendarSumAggregate | null;

  @TypeGraphQL.Field(() => CalendarMinAggregate, { nullable: true })
  _min!: CalendarMinAggregate | null;

  @TypeGraphQL.Field(() => CalendarMaxAggregate, { nullable: true })
  _max!: CalendarMaxAggregate | null;
}
