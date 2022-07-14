import * as TypeGraphQL from "type-graphql";
import { ActionScheduleScalarFieldEnum } from "../../../../enums/ActionScheduleScalarFieldEnum";
import { ActionScheduleOrderByWithAggregationInput } from "../../../inputs/ActionScheduleOrderByWithAggregationInput";
import { ActionScheduleScalarWhereWithAggregatesInput } from "../../../inputs/ActionScheduleScalarWhereWithAggregatesInput";
import { ActionScheduleWhereInput } from "../../../inputs/ActionScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, {
    nullable: true,
  })
  where?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActionScheduleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "habitId"
    | "frequency"
    | "multiplier"
    | "quantity"
    | "active"
    | "templateId"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ActionScheduleScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActionScheduleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
