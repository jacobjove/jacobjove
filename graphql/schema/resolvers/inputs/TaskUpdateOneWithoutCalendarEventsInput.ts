import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateOrConnectWithoutCalendarEventsInput } from "../inputs/TaskCreateOrConnectWithoutCalendarEventsInput";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskUpdateWithoutCalendarEventsInput } from "../inputs/TaskUpdateWithoutCalendarEventsInput";
import { TaskUpsertWithoutCalendarEventsInput } from "../inputs/TaskUpsertWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => TaskCreateWithoutCalendarEventsInput, { nullable: true })
  create?: TaskCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateOrConnectWithoutCalendarEventsInput, { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => TaskUpsertWithoutCalendarEventsInput, { nullable: true })
  upsert?: TaskUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: true })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateWithoutCalendarEventsInput, { nullable: true })
  update?: TaskUpdateWithoutCalendarEventsInput | undefined;
}
