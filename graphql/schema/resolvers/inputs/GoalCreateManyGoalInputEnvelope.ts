import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyGoalInput } from "../inputs/GoalCreateManyGoalInput";

@TypeGraphQL.InputType("GoalCreateManyGoalInputEnvelope", {
  isAbstract: true,
})
export class GoalCreateManyGoalInputEnvelope {
  @TypeGraphQL.Field((_type) => [GoalCreateManyGoalInput], { nullable: false })
  data!: GoalCreateManyGoalInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
