import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutUserInput } from "../inputs/TaskUpdateManyWithWhereWithoutUserInput";
import { TaskUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutUserInput";
import { TaskUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutUserInput], { nullable: true })
  create?: TaskCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: TaskUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyUserInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: TaskUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: TaskUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
