import * as TypeGraphQL from "type-graphql";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionUpdateWithoutMetricRecordsInput } from "../inputs/ActionUpdateWithoutMetricRecordsInput";

@TypeGraphQL.InputType("ActionUpsertWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionUpsertWithoutMetricRecordsInput {
  @TypeGraphQL.Field((_type) => ActionUpdateWithoutMetricRecordsInput, {
    nullable: false,
  })
  update!: ActionUpdateWithoutMetricRecordsInput;

  @TypeGraphQL.Field((_type) => ActionCreateWithoutMetricRecordsInput, {
    nullable: false,
  })
  create!: ActionCreateWithoutMetricRecordsInput;
}
