import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventCreateNestedManyWithoutScheduleInput } from "../inputs/CalendarEventCreateNestedManyWithoutScheduleInput";
import { HabitCreateNestedOneWithoutSchedulesInput } from "../inputs/HabitCreateNestedOneWithoutSchedulesInput";

@TypeGraphQL.InputType("ActionScheduleCreateWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleCreateWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: true,
  })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  quantity?: number | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutSchedulesInput, {
    nullable: false,
  })
  habit!: HabitCreateNestedOneWithoutSchedulesInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventCreateNestedManyWithoutScheduleInput | undefined;
}
