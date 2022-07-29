import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateInput } from "../../../inputs/RoutineHabitCreateInput";
import { RoutineHabitUpdateInput } from "../../../inputs/RoutineHabitUpdateInput";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRoutineHabitArgs {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineHabitCreateInput, { nullable: false })
  create!: RoutineHabitCreateInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateInput, { nullable: false })
  update!: RoutineHabitUpdateInput;
}
