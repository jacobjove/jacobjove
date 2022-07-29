import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitUpdateInput } from "../../../inputs/RoutineHabitUpdateInput";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRoutineHabitArgs {
  @TypeGraphQL.Field(() => RoutineHabitUpdateInput, { nullable: false })
  data!: RoutineHabitUpdateInput;

  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;
}
