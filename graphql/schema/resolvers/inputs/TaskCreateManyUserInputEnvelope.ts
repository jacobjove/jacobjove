import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyUserInput } from "../inputs/TaskCreateManyUserInput";

@TypeGraphQL.InputType("TaskCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class TaskCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [TaskCreateManyUserInput], { nullable: false })
  data!: TaskCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
