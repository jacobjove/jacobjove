import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { DateTimeScalar } from "../../scalars";
import { ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput";
import { CalendarEventCreateNestedManyWithoutScheduleInput } from "../inputs/CalendarEventCreateNestedManyWithoutScheduleInput";

@TypeGraphQL.InputType("ActionScheduleCreateWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleCreateWithoutHabitInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  active?: boolean | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventCreateNestedManyWithoutScheduleInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput, {
    nullable: true,
  })
  template?: ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput | undefined;
}
