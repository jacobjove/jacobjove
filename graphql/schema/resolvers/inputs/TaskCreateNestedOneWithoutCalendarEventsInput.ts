import * as TypeGraphQL from "type-graphql";
import { TaskCreateOrConnectWithoutCalendarEventsInput } from "../inputs/TaskCreateOrConnectWithoutCalendarEventsInput";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => TaskCreateWithoutCalendarEventsInput, {
    nullable: true,
  })
  create?: TaskCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: true,
  })
  connect?: TaskWhereUniqueInput | undefined;
}
