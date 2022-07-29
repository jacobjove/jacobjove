import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineUpdateWithoutHabitsInput } from "../inputs/RoutineUpdateWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineUpsertWithoutHabitsInput", {
  isAbstract: true,
})
export class RoutineUpsertWithoutHabitsInput {
  @TypeGraphQL.Field(() => RoutineUpdateWithoutHabitsInput, { nullable: false })
  update!: RoutineUpdateWithoutHabitsInput;

  @TypeGraphQL.Field(() => RoutineCreateWithoutHabitsInput, { nullable: false })
  create!: RoutineCreateWithoutHabitsInput;
}
