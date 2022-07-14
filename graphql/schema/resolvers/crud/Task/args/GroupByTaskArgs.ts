import * as TypeGraphQL from "type-graphql";
import { TaskScalarFieldEnum } from "../../../../enums/TaskScalarFieldEnum";
import { TaskOrderByWithAggregationInput } from "../../../inputs/TaskOrderByWithAggregationInput";
import { TaskScalarWhereWithAggregatesInput } from "../../../inputs/TaskScalarWhereWithAggregatesInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByTaskArgs {
  @TypeGraphQL.Field((_type) => TaskWhereInput, {
    nullable: true,
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [TaskOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: TaskOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [TaskScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "title"
    | "description"
    | "plannedStartDate"
    | "dueDate"
    | "userId"
    | "parentId"
    | "habitId"
    | "rank"
    | "completedAt"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => TaskScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: TaskScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
