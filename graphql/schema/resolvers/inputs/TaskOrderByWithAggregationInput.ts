import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { TaskAvgOrderByAggregateInput } from "../inputs/TaskAvgOrderByAggregateInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
import { TaskSumOrderByAggregateInput } from "../inputs/TaskSumOrderByAggregateInput";

@TypeGraphQL.InputType("TaskOrderByWithAggregationInput", {
  isAbstract: true,
})
export class TaskOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  plannedStartDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  dueDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rank?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  completedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => TaskCountOrderByAggregateInput, { nullable: true })
  _count?: TaskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskAvgOrderByAggregateInput, { nullable: true })
  _avg?: TaskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskMaxOrderByAggregateInput, { nullable: true })
  _max?: TaskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskMinOrderByAggregateInput, { nullable: true })
  _min?: TaskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskSumOrderByAggregateInput, { nullable: true })
  _sum?: TaskSumOrderByAggregateInput | undefined;
}
