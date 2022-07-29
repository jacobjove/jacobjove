import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyRoutineInput } from "../inputs/RoutineHabitCreateManyRoutineInput";

@TypeGraphQL.InputType("RoutineHabitCreateManyRoutineInputEnvelope", {
  isAbstract: true,
})
export class RoutineHabitCreateManyRoutineInputEnvelope {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateManyRoutineInput], { nullable: false })
  data!: RoutineHabitCreateManyRoutineInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
