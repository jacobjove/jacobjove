import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutParentInput", {
  isAbstract: true,
})
export class TaskCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(() => [TaskCreateWithoutParentInput], { nullable: true })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskCreateOrConnectWithoutParentInput], { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => TaskCreateManyParentInputEnvelope, { nullable: true })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [TaskWhereUniqueInput], { nullable: true })
  connect?: TaskWhereUniqueInput[] | undefined;
}
