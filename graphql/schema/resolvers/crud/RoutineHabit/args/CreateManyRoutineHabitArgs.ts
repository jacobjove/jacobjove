import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyInput } from "../../../inputs/RoutineHabitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateManyInput], { nullable: false })
  data!: RoutineHabitCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
