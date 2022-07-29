import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyHabitInput } from "../inputs/GoalCreateManyHabitInput";

@TypeGraphQL.InputType("GoalCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class GoalCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [GoalCreateManyHabitInput], { nullable: false })
  data!: GoalCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
