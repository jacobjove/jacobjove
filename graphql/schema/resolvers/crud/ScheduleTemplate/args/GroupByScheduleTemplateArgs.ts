import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateScalarFieldEnum } from "../../../../enums/ScheduleTemplateScalarFieldEnum";
import { ScheduleTemplateOrderByWithAggregationInput } from "../../../inputs/ScheduleTemplateOrderByWithAggregationInput";
import { ScheduleTemplateScalarWhereWithAggregatesInput } from "../../../inputs/ScheduleTemplateScalarWhereWithAggregatesInput";
import { ScheduleTemplateWhereInput } from "../../../inputs/ScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, {
    nullable: true,
  })
  where?: ScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ScheduleTemplateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "frequency" | "multiplier" | "chron">;

  @TypeGraphQL.Field((_type) => ScheduleTemplateScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ScheduleTemplateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
