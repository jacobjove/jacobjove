import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoutineHabitArgs {
  @TypeGraphQL.Field(() => RoutineHabitWhereInput, { nullable: true })
  where?: RoutineHabitWhereInput | undefined;
}
