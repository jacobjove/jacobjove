import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyHabitInput } from "../inputs/RoutineHabitCreateManyHabitInput";

@TypeGraphQL.InputType("RoutineHabitCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class RoutineHabitCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateManyHabitInput], { nullable: false })
  data!: RoutineHabitCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
