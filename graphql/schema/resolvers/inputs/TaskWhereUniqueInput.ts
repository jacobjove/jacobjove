import * as TypeGraphQL from "type-graphql";
import { TaskUserIdParentIdRankCompoundUniqueInput } from "../inputs/TaskUserIdParentIdRankCompoundUniqueInput";

@TypeGraphQL.InputType("TaskWhereUniqueInput", {
  isAbstract: true,
})
export class TaskWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => TaskUserIdParentIdRankCompoundUniqueInput, {
    nullable: true,
  })
  userId_parentId_rank?: TaskUserIdParentIdRankCompoundUniqueInput | undefined;
}
