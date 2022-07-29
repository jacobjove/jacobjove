import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutParentInput } from "../inputs/TaskUpdateManyWithWhereWithoutParentInput";
import { TaskUpdateWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutParentInput";
import { TaskUpsertWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutParentInput", {
  isAbstract: true,
})
export class TaskUpdateManyWithoutParentInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutParentInput], { nullable: true })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutParentInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpsertWithWhereUniqueWithoutParentInput], { nullable: true })
  upsert?: TaskUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyParentInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateWithWhereUniqueWithoutParentInput], { nullable: true })
  update?: TaskUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskUpdateManyWithWhereWithoutParentInput], { nullable: true })
  updateMany?: TaskUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
