import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyInput } from "../../../inputs/RoutineHabitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRoutineHabitArgs {
  @TypeGraphQL.Field(() => [RoutineHabitCreateManyInput], { nullable: false })
  data!: RoutineHabitCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
