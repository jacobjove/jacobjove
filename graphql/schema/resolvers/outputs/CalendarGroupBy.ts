import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";
import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";

@TypeGraphQL.ObjectType("CalendarGroupBy", {
  isAbstract: true,
})
export class CalendarGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  uid!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  color!: string | null;

  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  provider!: "google" | "apple" | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  accountId!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  primary!: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  public!: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  enabled!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => CalendarCountAggregate, { nullable: true })
  _count!: CalendarCountAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarAvgAggregate, { nullable: true })
  _avg!: CalendarAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarSumAggregate, { nullable: true })
  _sum!: CalendarSumAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarMinAggregate, { nullable: true })
  _min!: CalendarMinAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarMaxAggregate, { nullable: true })
  _max!: CalendarMaxAggregate | null;
}
