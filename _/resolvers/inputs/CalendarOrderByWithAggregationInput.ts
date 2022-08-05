import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { CalendarAvgOrderByAggregateInput } from "../inputs/CalendarAvgOrderByAggregateInput";
import { CalendarCountOrderByAggregateInput } from "../inputs/CalendarCountOrderByAggregateInput";
import { CalendarMaxOrderByAggregateInput } from "../inputs/CalendarMaxOrderByAggregateInput";
import { CalendarMinOrderByAggregateInput } from "../inputs/CalendarMinOrderByAggregateInput";
import { CalendarSumOrderByAggregateInput } from "../inputs/CalendarSumOrderByAggregateInput";

@TypeGraphQL.InputType("CalendarOrderByWithAggregationInput", { isAbstract: true })
export class CalendarOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  remoteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  syncToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  accountId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  primary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CalendarCountOrderByAggregateInput, { nullable: true })
  _count?: CalendarCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarAvgOrderByAggregateInput, { nullable: true })
  _avg?: CalendarAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarMaxOrderByAggregateInput, { nullable: true })
  _max?: CalendarMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarMinOrderByAggregateInput, { nullable: true })
  _min?: CalendarMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarSumOrderByAggregateInput, { nullable: true })
  _sum?: CalendarSumOrderByAggregateInput | undefined;
}
