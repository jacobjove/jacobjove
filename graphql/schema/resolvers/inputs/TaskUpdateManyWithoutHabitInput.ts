import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyHabitInputEnvelope } from "../inputs/TaskCreateManyHabitInputEnvelope";
import { TaskCreateOrConnectWithoutHabitInput } from "../inputs/TaskCreateOrConnectWithoutHabitInput";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutHabitInput } from "../inputs/TaskUpdateManyWithWhereWithoutHabitInput";
import { TaskUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutHabitInput";
import { TaskUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutHabitInput], { nullable: true })
  create?: TaskCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpsertWithWhereUniqueWithoutHabitInput], { nullable: true })
  upsert?: TaskUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateWithWhereUniqueWithoutHabitInput], { nullable: true })
  update?: TaskUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateManyWithWhereWithoutHabitInput], { nullable: true })
  updateMany?: TaskUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
