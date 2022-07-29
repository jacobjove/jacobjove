import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyHabitInput } from "../inputs/TaskCreateManyHabitInput";

@TypeGraphQL.InputType("TaskCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class TaskCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [TaskCreateManyHabitInput], { nullable: false })
  data!: TaskCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
