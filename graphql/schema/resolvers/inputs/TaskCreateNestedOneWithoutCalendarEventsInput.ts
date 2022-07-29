import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateOrConnectWithoutCalendarEventsInput } from "../inputs/TaskCreateOrConnectWithoutCalendarEventsInput";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => TaskCreateWithoutCalendarEventsInput, { nullable: true })
  create?: TaskCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateOrConnectWithoutCalendarEventsInput, { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: true })
  connect?: TaskWhereUniqueInput | undefined;
}
