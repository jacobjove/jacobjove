import * as TypeGraphQL from "type-graphql";
import { TaskCreateManyHabitInputEnvelope } from "../inputs/TaskCreateManyHabitInputEnvelope";
import { TaskCreateOrConnectWithoutHabitInput } from "../inputs/TaskCreateOrConnectWithoutHabitInput";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class TaskCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [TaskCreateWithoutHabitInput], {
    nullable: true,
  })
  create?: TaskCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TaskCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: TaskCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateManyHabitInputEnvelope, {
    nullable: true,
  })
  createMany?: TaskCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [TaskWhereUniqueInput], {
    nullable: true,
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
