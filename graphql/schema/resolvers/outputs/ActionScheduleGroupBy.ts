import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { DateTimeScalar } from "../../scalars";
import { ActionScheduleAvgAggregate } from "../outputs/ActionScheduleAvgAggregate";
import { ActionScheduleCountAggregate } from "../outputs/ActionScheduleCountAggregate";
import { ActionScheduleMaxAggregate } from "../outputs/ActionScheduleMaxAggregate";
import { ActionScheduleMinAggregate } from "../outputs/ActionScheduleMinAggregate";
import { ActionScheduleSumAggregate } from "../outputs/ActionScheduleSumAggregate";

@TypeGraphQL.ObjectType("ActionScheduleGroupBy", {
  isAbstract: true,
})
export class ActionScheduleGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: false,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  multiplier!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  quantity!: number;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  active!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  templateId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ActionScheduleCountAggregate, {
    nullable: true,
  })
  _count!: ActionScheduleCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleAvgAggregate, {
    nullable: true,
  })
  _avg!: ActionScheduleAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleSumAggregate, {
    nullable: true,
  })
  _sum!: ActionScheduleSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleMinAggregate, {
    nullable: true,
  })
  _min!: ActionScheduleMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleMaxAggregate, {
    nullable: true,
  })
  _max!: ActionScheduleMaxAggregate | null;
}
