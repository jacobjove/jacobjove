import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateWithoutHabitInput, { nullable: false })
  create!: RoutineHabitCreateWithoutHabitInput;
}
