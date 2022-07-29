import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutCalendarEventsInput, { nullable: false })
  create!: TaskCreateWithoutCalendarEventsInput;
}
