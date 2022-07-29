import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyRoutineInput } from "../inputs/RoutineHabitCreateManyRoutineInput";

@TypeGraphQL.InputType("RoutineHabitCreateManyRoutineInputEnvelope", {
  isAbstract: true,
})
export class RoutineHabitCreateManyRoutineInputEnvelope {
  @TypeGraphQL.Field(() => [RoutineHabitCreateManyRoutineInput], { nullable: false })
  data!: RoutineHabitCreateManyRoutineInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
