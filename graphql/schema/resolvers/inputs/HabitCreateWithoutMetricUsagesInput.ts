import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutHabitsInput } from "../inputs/ActCreateNestedOneWithoutHabitsInput";
import { ActionCreateNestedManyWithoutHabitInput } from "../inputs/ActionCreateNestedManyWithoutHabitInput";
import { ActionScheduleCreateNestedManyWithoutHabitInput } from "../inputs/ActionScheduleCreateNestedManyWithoutHabitInput";
import { CalendarEventCreateNestedManyWithoutHabitInput } from "../inputs/CalendarEventCreateNestedManyWithoutHabitInput";
import { GoalCreateNestedManyWithoutHabitInput } from "../inputs/GoalCreateNestedManyWithoutHabitInput";
import { RoutineHabitCreateNestedManyWithoutHabitInput } from "../inputs/RoutineHabitCreateNestedManyWithoutHabitInput";
import { TaskCreateNestedManyWithoutHabitInput } from "../inputs/TaskCreateNestedManyWithoutHabitInput";
import { UserCreateNestedOneWithoutHabitsInput } from "../inputs/UserCreateNestedOneWithoutHabitsInput";

@TypeGraphQL.InputType("HabitCreateWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitCreateWithoutMetricUsagesInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  defaultDurationInMinutes?: number | undefined;

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

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutHabitsInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutHabitsInput;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutHabitsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutHabitsInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  schedules?: ActionScheduleCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  goals?: GoalCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  routines?: RoutineHabitCreateNestedManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => ActionCreateNestedManyWithoutHabitInput, {
    nullable: true,
  })
  actions?: ActionCreateNestedManyWithoutHabitInput | undefined;
}
