import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyHabitInput } from "../inputs/ActionScheduleCreateManyHabitInput";

@TypeGraphQL.InputType("ActionScheduleCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [ActionScheduleCreateManyHabitInput], { nullable: false })
  data!: ActionScheduleCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
