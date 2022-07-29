import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { RoutineCreateNestedOneWithoutHabitsInput } from "../inputs/RoutineCreateNestedOneWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineHabitCreateWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitCreateWithoutHabitInput {
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
}
