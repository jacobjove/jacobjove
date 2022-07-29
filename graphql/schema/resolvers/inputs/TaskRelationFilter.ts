import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskRelationFilter", {
  isAbstract: true,
})
export class TaskRelationFilter {
  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  is?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  isNot?: TaskWhereInput | undefined;
}
