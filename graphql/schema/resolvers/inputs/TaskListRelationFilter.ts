import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskListRelationFilter", {
  isAbstract: true,
})
export class TaskListRelationFilter {
  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  every?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  some?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  none?: TaskWhereInput | undefined;
}
