import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitScalarWhereInput } from "../inputs/RoutineHabitScalarWhereInput";
import { RoutineHabitUpdateManyMutationInput } from "../inputs/RoutineHabitUpdateManyMutationInput";

@TypeGraphQL.InputType("RoutineHabitUpdateManyWithWhereWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateManyWithWhereWithoutRoutineInput {
  @TypeGraphQL.Field(() => RoutineHabitScalarWhereInput, { nullable: false })
  where!: RoutineHabitScalarWhereInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateManyMutationInput, { nullable: false })
  data!: RoutineHabitUpdateManyMutationInput;
}
