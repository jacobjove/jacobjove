import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateScalarFieldEnum } from "../../../../enums/ActionScheduleTemplateScalarFieldEnum";
import { ActionScheduleTemplateOrderByWithAggregationInput } from "../../../inputs/ActionScheduleTemplateOrderByWithAggregationInput";
import { ActionScheduleTemplateScalarWhereWithAggregatesInput } from "../../../inputs/ActionScheduleTemplateScalarWhereWithAggregatesInput";
import { ActionScheduleTemplateWhereInput } from "../../../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, {
    nullable: true,
  })
  where?: ActionScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActionScheduleTemplateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "actId" | "scheduleTemplateId" | "frequency" | "multiplier" | "quantity">;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActionScheduleTemplateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
