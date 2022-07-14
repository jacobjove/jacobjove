import * as TypeGraphQL from "type-graphql";
import { TaskCreateOrConnectWithoutCalendarEventsInput } from "../inputs/TaskCreateOrConnectWithoutCalendarEventsInput";
import { TaskCreateWithoutCalendarEventsInput } from "../inputs/TaskCreateWithoutCalendarEventsInput";
import { TaskUpdateWithoutCalendarEventsInput } from "../inputs/TaskUpdateWithoutCalendarEventsInput";
import { TaskUpsertWithoutCalendarEventsInput } from "../inputs/TaskUpsertWithoutCalendarEventsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => TaskCreateWithoutCalendarEventsInput, {
    nullable: true,
  })
  create?: TaskCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpsertWithoutCalendarEventsInput, {
    nullable: true,
  })
  upsert?: TaskUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: true,
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutCalendarEventsInput, {
    nullable: true,
  })
  update?: TaskUpdateWithoutCalendarEventsInput | undefined;
}
