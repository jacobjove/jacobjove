import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskUpdateWithoutCalendarEventsInput } from "../inputs/TaskUpdateWithoutCalendarEventsInput";

@TypeGraphQL.InputType("TaskUpsertWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskUpsertWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => TaskUpdateWithoutCalendarEventsInput, { nullable: false })
  update!: TaskUpdateWithoutCalendarEventsInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutCalendarEventsInput, { nullable: false })
  create!: TaskCreateWithoutCalendarEventsInput;
}
