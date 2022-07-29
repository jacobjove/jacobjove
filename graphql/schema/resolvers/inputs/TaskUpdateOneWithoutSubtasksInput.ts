import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";
import { TaskUpsertWithoutSubtasksInput } from "../inputs/TaskUpsertWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskUpdateOneWithoutSubtasksInput {
  @TypeGraphQL.Field(() => TaskCreateWithoutSubtasksInput, { nullable: true })
  create?: TaskCreateWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateOrConnectWithoutSubtasksInput, { nullable: true })
  connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => TaskUpsertWithoutSubtasksInput, { nullable: true })
  upsert?: TaskUpsertWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: true })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateWithoutSubtasksInput, { nullable: true })
  update?: TaskUpdateWithoutSubtasksInput | undefined;
}
