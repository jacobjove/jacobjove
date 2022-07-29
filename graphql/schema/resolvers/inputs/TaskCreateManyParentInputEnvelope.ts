import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyParentInput } from "../inputs/TaskCreateManyParentInput";

@TypeGraphQL.InputType("TaskCreateManyParentInputEnvelope", {
  isAbstract: true,
})
export class TaskCreateManyParentInputEnvelope {
  @TypeGraphQL.Field((_type) => [TaskCreateManyParentInput], { nullable: false })
  data!: TaskCreateManyParentInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
