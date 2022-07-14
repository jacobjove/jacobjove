import * as TypeGraphQL from "type-graphql";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: false,
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutCalendarEventsInput, {
    nullable: false,
  })
  create!: TaskCreateWithoutCalendarEventsInput;
}
