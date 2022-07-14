import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateManyHabitInput } from "../inputs/ActionScheduleCreateManyHabitInput";

@TypeGraphQL.InputType("ActionScheduleCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateManyHabitInput], {
    nullable: false,
  })
  data!: ActionScheduleCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
