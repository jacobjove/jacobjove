import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionUpdateWithoutMetricRecordsInput } from "../inputs/ActionUpdateWithoutMetricRecordsInput";

@TypeGraphQL.InputType("ActionUpsertWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionUpsertWithoutMetricRecordsInput {
  @TypeGraphQL.Field(() => ActionUpdateWithoutMetricRecordsInput, { nullable: false })
  update!: ActionUpdateWithoutMetricRecordsInput;

  @TypeGraphQL.Field(() => ActionCreateWithoutMetricRecordsInput, { nullable: false })
  create!: ActionCreateWithoutMetricRecordsInput;
}
