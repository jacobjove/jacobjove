import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ScheduleTemplateAvgOrderByAggregateInput } from "../inputs/ScheduleTemplateAvgOrderByAggregateInput";
import { ScheduleTemplateCountOrderByAggregateInput } from "../inputs/ScheduleTemplateCountOrderByAggregateInput";
import { ScheduleTemplateMaxOrderByAggregateInput } from "../inputs/ScheduleTemplateMaxOrderByAggregateInput";
import { ScheduleTemplateMinOrderByAggregateInput } from "../inputs/ScheduleTemplateMinOrderByAggregateInput";
import { ScheduleTemplateSumOrderByAggregateInput } from "../inputs/ScheduleTemplateSumOrderByAggregateInput";

@TypeGraphQL.InputType("ScheduleTemplateOrderByWithAggregationInput", { isAbstract: true })
export class ScheduleTemplateOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  chron?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateCountOrderByAggregateInput, { nullable: true })
  _count?: ScheduleTemplateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateAvgOrderByAggregateInput, { nullable: true })
  _avg?: ScheduleTemplateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateMaxOrderByAggregateInput, { nullable: true })
  _max?: ScheduleTemplateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateMinOrderByAggregateInput, { nullable: true })
  _min?: ScheduleTemplateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateSumOrderByAggregateInput, { nullable: true })
  _sum?: ScheduleTemplateSumOrderByAggregateInput | undefined;
}
