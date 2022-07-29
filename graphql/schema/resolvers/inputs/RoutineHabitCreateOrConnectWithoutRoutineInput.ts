import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateOrConnectWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitCreateOrConnectWithoutRoutineInput {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateWithoutRoutineInput, { nullable: false })
  create!: RoutineHabitCreateWithoutRoutineInput;
}
