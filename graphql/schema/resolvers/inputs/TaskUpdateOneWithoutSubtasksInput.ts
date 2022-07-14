import * as TypeGraphQL from "type-graphql";
import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";
import { TaskUpsertWithoutSubtasksInput } from "../inputs/TaskUpsertWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskUpdateOneWithoutSubtasksInput {
  @TypeGraphQL.Field((_type) => TaskCreateWithoutSubtasksInput, {
    nullable: true,
  })
  create?: TaskCreateWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateOrConnectWithoutSubtasksInput, {
    nullable: true,
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpsertWithoutSubtasksInput, {
    nullable: true,
  })
  upsert?: TaskUpsertWithoutSubtasksInput | undefined;

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

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutSubtasksInput, {
    nullable: true,
  })
  update?: TaskUpdateWithoutSubtasksInput | undefined;
}
