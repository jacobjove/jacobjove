import * as TypeGraphQL from "type-graphql";
import { GoalCreateManyHabitInput } from "../inputs/GoalCreateManyHabitInput";

@TypeGraphQL.InputType("GoalCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class GoalCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [GoalCreateManyHabitInput], {
    nullable: false,
  })
  data!: GoalCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
