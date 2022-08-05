import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutRoutinesInput } from "../inputs/HabitCreateNestedOneWithoutRoutinesInput";

@TypeGraphQL.InputType("RoutineHabitCreateWithoutRoutineInput", { isAbstract: true })
export class RoutineHabitCreateWithoutRoutineInput {
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

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutRoutinesInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutRoutinesInput;
}
