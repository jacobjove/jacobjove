import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutRoutinesInput } from "../inputs/HabitCreateNestedOneWithoutRoutinesInput";
import { RoutineCreateNestedOneWithoutHabitsInput } from "../inputs/RoutineCreateNestedOneWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineHabitCreateInput", { isAbstract: true })
export class RoutineHabitCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  durationInMinutes!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => RoutineCreateNestedOneWithoutHabitsInput, { nullable: false })
  routine!: RoutineCreateNestedOneWithoutHabitsInput;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutRoutinesInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutRoutinesInput;
}
