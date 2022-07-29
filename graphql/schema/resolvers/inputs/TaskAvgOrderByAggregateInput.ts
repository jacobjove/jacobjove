import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskAvgOrderByAggregateInput", {
  isAbstract: true,
})
export class TaskAvgOrderByAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rank?: "asc" | "desc" | undefined;
}
