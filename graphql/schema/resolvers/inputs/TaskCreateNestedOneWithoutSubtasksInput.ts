import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskCreateNestedOneWithoutSubtasksInput {
  @TypeGraphQL.Field(() => TaskCreateWithoutSubtasksInput, { nullable: true })
  create?: TaskCreateWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateOrConnectWithoutSubtasksInput, { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: true })
  connect?: TaskWhereUniqueInput | undefined;
}
