import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  active!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  templateId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ActionScheduleCountAggregate, { nullable: true })
  _count!: ActionScheduleCountAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleAvgAggregate, { nullable: true })
  _avg!: ActionScheduleAvgAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleSumAggregate, { nullable: true })
  _sum!: ActionScheduleSumAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleMinAggregate, { nullable: true })
  _min!: ActionScheduleMinAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleMaxAggregate, { nullable: true })
  _max!: ActionScheduleMaxAggregate | null;
}
