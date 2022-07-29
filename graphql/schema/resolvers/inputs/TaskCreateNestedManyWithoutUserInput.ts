import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class TaskCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutUserInput], { nullable: true })
  create?: TaskCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyUserInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;
}
